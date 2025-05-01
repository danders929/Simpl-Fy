import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <p className="header-logo">
          <Link to="/" onClick={() => setMenuOpen(false)}>Simpl-Fy</Link>
        </p>

        {/* Hamburger Icon */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        {/* Navigation */}
        <nav className={`header-nav ${menuOpen ? 'open-fullscreen' : ''}`}>
          {/* Close "X" Button */}
          <button 
            className="menu-close" 
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            ✕
          </button>

          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
