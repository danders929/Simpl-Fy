import './Header.css'
import logo from '../../public/assets/simpl-fy_logo_Transparent.png'

export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Simpl-FY Logo" className="logo" />
        
      </div>
      <nav className="nav-links">
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}