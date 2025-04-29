import React from "react"
import logo from '../../public/assets/simpl-fy-logo-100x100.png'
import './Header.css'

export default function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <img src={logo} alt="Logo" />
            </div>
            <nav className="header-nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}