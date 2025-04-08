'use client';

import { useState } from "react";
import "@/styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header" id="myHeader">
      <div className="header-layout">
        {/* Logo */}
        <a href="/" className="logo" >
          <img
            src="/img/logo-latest.png"
            alt="Carbon Foot Print"
            title="Carbon Foot Print"
          
          />
        </a>

        {/* Navigation Menu */}
        <div className={`header-right ${menuOpen ? "show" : ""}`} id="myTopnav">
         <a className="active" href="#home">Home</a>
				<a href="#how_it_work">How it works</a>
				<a href="#services">Services</a>
				<a href="#faq">FAQ</a>

        <a href="#get_A_Badge">Get a Badge</a>
        </div>

        {/* Menu Toggle Button (Mobile) */}
        <button className="icon" onClick={toggleMenu} aria-label="Toggle menu">
          {menuOpen ? (
            <img
              src="/img/close.png"
              alt="Close"
              title="Close"
             
            />
          ) : (
            <img
              src="/img/menu.png"
              alt="Menu"
              title="Menu"
            
            />
          )}
        </button>

        {/* Contact Us Button */}
        <div className="contact-us">
          <a href="/#contact">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
