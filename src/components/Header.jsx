import React, { useState } from "react";
import './Header.css';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="header-container">
                <p className="header-logo"><a href="#home">Simpl-Fy</a></p>

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
                        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                        <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
                        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}