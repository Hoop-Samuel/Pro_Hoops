import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";

/* Import SVG Icons */
import basketball from "./icons/basketball.svg";
import menu from "./icons/menu.svg";
import cart from "./icons/cart.svg";
import collections from "./icons/collections.svg";
import person from "./icons/person.svg";

const Menu = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index, route) => {
    setActiveIndex(index); // Set the active index
    navigate(route); // Navigate to the specified route
  };

  return (
    <div className="menu-container">
    <div className="menu">
      <div
        className={`menu__item ${activeIndex === 0 ? "active" : ""}`}
        onClick={() => handleItemClick(0, "/home")}
      >
        <img
          src={basketball}
          className={`icon ${activeIndex === 0 ? "icon-active-basketball" : ""}`}
          alt="Basketball"
        />
        <span className="menu-text">Home</span>
      </div>
      <div
        className={`menu__item ${activeIndex === 1 ? "active" : ""}`}
        onClick={() => handleItemClick(1, "/meetthecoach")}
      >
        <img
          src={menu}
          className={`icon ${activeIndex === 1 ? "icon-active-menu" : ""}`}
          alt="Menu"
        />
        <span className="menu-text">Meet the Coach</span>
      </div>
      <div
        className={`menu__item ${activeIndex === 2 ? "active" : ""}`}
        onClick={() => handleItemClick(2, "/gearup")}
      >
        <img
          src={cart}
          className={`icon ${activeIndex === 2 ? "icon-active-cart" : ""}`}
          alt="Shopping Cart"
        />
        <span className="menu-text">Gear Up</span>
      </div>
      <div
        className={`menu__item ${activeIndex === 3 ? "active" : ""}`}
        onClick={() => handleItemClick(3, "/photogallery")}
      >
        <img
          src={collections}
          className={`icon ${activeIndex === 3 ? "icon-active-collections" : ""}`}
          alt="Collections"
        />
        <span className="menu-text">Gallery</span>
      </div>
      <div
        className={`menu__item ${activeIndex === 4 ? "active" : ""}`}
        onClick={() => handleItemClick(4, "/login")}
      >
        <img
          src={person}
          className={`icon ${activeIndex === 4 ? "icon-active-person" : ""}`}
          alt="Person"
        />
        <span className="menu-text">Login</span>
      </div>
    </div>
  </div>  
  );
};

export default Menu;
