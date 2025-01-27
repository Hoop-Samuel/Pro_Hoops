from flask import Flask, request, jsonify
import mysql.connector
from mysql.connector import Error
import bcrypt
from datetime import datetime, timedelta
import requests
from dotenv import load_dotenv
import os

# Load environment variables from .env
load_dotenv()

# Retrieve variables from the .env file
MYSQL_HOST = os.getenv("MYSQL_HOST")
MYSQL_USER = os.getenv("MYSQL_USER")
MYSQL_PASSWORD = os.getenv("MYSQL_PASSWORD")
MYSQL_DATABASE = os.getenv("MYSQL_DATABASE")
GUMROAD_ACCESS_TOKEN = os.getenv("GUMROAD_ACCESS_TOKEN")

app = Flask(__name__)

# Database connection setup
def create_connection():
    try:
        connection = mysql.connector.connect(
            host=MYSQL_HOST,
            user=MYSQL_USER,
            password=MYSQL_PASSWORD,
            database=MYSQL_DATABASE
        )
        return connection
    except Error as e:
        print(f"Error: {e}")
        return None

# Initialize the database
def init_db():
    connection = create_connection()
    if connection:
        cursor = connection.cursor()
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                last_name VARCHAR(255) NOT NULL,
                age INT NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                program_access_until DATETIME
            )
        """)
        connection.commit()
        connection.close()

init_db()

# Route for user registration
@app.route("/register", methods=["POST"])
def register():
    data = request.json
    name = data.get("name")
    last_name = data.get("last_name")
    age = data.get("age")
    email = data.get("email")
    password = data.get("password")

    if not all([name, last_name, age, email, password]):
        return jsonify({"error": "All fields are required"}), 400

    # Hash the password with bcrypt
    hashed_password = bcrypt.hashpw(password.encode(), bcrypt.gensalt())

    connection = create_connection()
    if connection:
        try:
            cursor = connection.cursor()
            cursor.execute("""
                INSERT INTO users (name, last_name, age, email, password)
                VALUES (%s, %s, %s, %s, %s)
            """, (name, last_name, age, email, hashed_password))
            connection.commit()
            return jsonify({"message": "User registered successfully"}), 201
        except mysql.connector.IntegrityError:
            return jsonify({"error": "Email already exists"}), 400
        finally:
            connection.close()
    return jsonify({"error": "Database connection failed"}), 500

# Route for user login
@app.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    if not all([email, password]):
        return jsonify({"error": "Email and password are required"}), 400

    connection = create_connection()
    if connection:
        cursor = connection.cursor(dictionary=True)
        cursor.execute("""
            SELECT id, name, last_name, age, password, program_access_until FROM users WHERE email = %s
        """, (email,))
        user = cursor.fetchone()

        if user and bcrypt.checkpw(password.encode(), user["password"].encode()):
            return jsonify({
                "id": user["id"],
                "name": user["name"],
                "last_name": user["last_name"],
                "age": user["age"],
                "program_access_until": user["program_access_until"]
            }), 200
        else:
            return jsonify({"error": "Invalid email or password"}), 401
    return jsonify({"error": "Database connection failed"}), 500

# Gumroad integration: verifying purchase
@app.route("/verify-purchase", methods=["POST"])
def verify_purchase():
    data = request.json
    email = data.get("email")
    gumroad_product_id = data.get("product_id")

    # Call Gumroad's API to verify purchase
    response = requests.get(
        "https://api.gumroad.com/v2/licenses/verify",
        params={
            "product_id": gumroad_product_id,
            "license_key": data.get("license_key")
        },
        headers={
            "Authorization": f"Bearer {GUMROAD_ACCESS_TOKEN}"
        }
    )

    if response.status_code == 200 and response.json().get("success"):
        # Grant 30 days access to the user
        access_duration = timedelta(days=30)
        program_access_until = datetime.now() + access_duration

        connection = create_connection()
        if connection:
            cursor = connection.cursor()
            cursor.execute("""
                UPDATE users
                SET program_access_until = %s
                WHERE email = %s
            """, (program_access_until, email))
            connection.commit()
            connection.close()
            return jsonify({"message": "Access granted for 30 days"}), 200
    else:
        return jsonify({"error": "Purchase verification failed"}), 400

if __name__ == "__main__":
    app.run(debug=True)
