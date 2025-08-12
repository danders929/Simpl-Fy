import { useState } from "react";
import "./Header.css";

//Header with logo, company name, and nav-links
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="site-header">
      <div className="container nav">
        {/* Brand logo and name */}
        <a className="brand" href="#top" aria-label="Simpl-FY home">
          <img src="/assets/simpLogoV1.png" alt="Simpl-FY logo" />
          <span>Simpl-FY</span>
        </a>
        {/* Navigation Links (desktop) */}
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact" className="btn ghost">
            Contact
          </a>
          <a href="#get-started" className="btn primary">
            Get started
          </a>
        </nav>
        {/* Hamburger menu button (mobile) */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
      </div>

      {/* Mobile navigation menu */}
      <nav
        id="mobile-nav"
        className={`mobile-nav-links ${menuOpen ? "open" : ""}`}
      >
        <a href="#features" onClick={toggleMenu}>
          Features
        </a>
        <a href="#about" onClick={toggleMenu}>
          About
        </a>
        <a href="#services" onClick={toggleMenu}>
          Services
        </a>
        <a href="#contact" className="btn ghost" onClick={toggleMenu}>
          Contact
        </a>
        <a href="#get-started" className="btn primary" onClick={toggleMenu}>
          Get started
        </a>
      </nav>
    </header>
  );
}