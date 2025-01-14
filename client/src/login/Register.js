import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

export default function Register() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    age: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
  };

  return (
    <div className="register-form-container">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-8 text-center text-2xl font-bold tracking-tight text-gray-900">
          Create an Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="register-form space-y-6">
          {/* Name Field */}
          {currentStep === 0 && (
            <div className="field">
              <label htmlFor="name" className="label">
                Name
              </label>
              <div className="input-wrapper">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  required
                  onChange={handleChange}
                  className={`input ${currentStep === 0 ? 'show' : 'hide'}`}
                />
              </div>
            </div>
          )}

          {/* Last Name Field */}
          {currentStep === 1 && (
            <div className="field">
              <label htmlFor="lastName" className="label">
                Last Name
              </label>
              <div className="input-wrapper">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  required
                  onChange={handleChange}
                  className={`input ${currentStep === 1 ? 'show' : 'hide'}`}
                />
              </div>
            </div>
          )}

          {/* Age Field */}
          {currentStep === 2 && (
            <div className="field">
              <label htmlFor="age" className="label">
                Age
              </label>
              <div className="input-wrapper">
                <input
                  id="age"
                  name="age"
                  type="number"
                  value={formData.age}
                  required
                  min="0"
                  onChange={handleChange}
                  className={`input ${currentStep === 2 ? 'show' : 'hide'}`}
                />
              </div>
            </div>
          )}

          {/* Email Field */}
          {currentStep === 3 && (
            <div className="field">
              <label htmlFor="email" className="label">
                Email address
              </label>
              <div className="input-wrapper">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  required
                  onChange={handleChange}
                  className={`input ${currentStep === 3 ? 'show' : 'hide'}`}
                />
              </div>
            </div>
          )}

          {/* Password Field */}
          {currentStep === 4 && (
            <div className="field">
              <label htmlFor="password" className="label">
                Password
              </label>
              <div className="input-wrapper">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  required
                  onChange={handleChange}
                  className={`input ${currentStep === 4 ? 'show' : 'hide'}`}
                />
              </div>
            </div>
          )}

          {/* Next Button */}
          {currentStep < 4 && (
            <div>
              <button
                type="button"
                onClick={handleNext}
                className="next-btn"
              >
                Next
              </button>
            </div>
          )}

          {/* Submit Button (Last Step) */}
          {currentStep === 4 && (
            <div>
              <button
                type="submit"
                className="submit-btn"
              >
                Register
              </button>
            </div>
          )}
        </form>

        {/* Link to Login page */}
        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?{' '}
          <Link to="/person" className="font-semibold text-[#f4511e] hover:text-[#e64a19]">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}
