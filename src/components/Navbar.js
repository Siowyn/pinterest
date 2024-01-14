// Navbar.js
import React, { useState, useEffect } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${isSticky ? "sticky" : ""}`}>
      <nav className="navigation">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Explore</a>
          </li>
          <li>
            <a href="#services">Create</a>
          </li>
          <li className="search-box">
            <input type="text" placeholder="Search..." />
          </li>
          <li>
            <a href="#contact">Bell</a>
          </li>
          <li>
            <a href="#contact">Message</a>
          </li>
          <li>
            <a href="#contact">Profile</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
