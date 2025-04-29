import { useState } from 'react'
import reactLogo from '../public/assets/react.svg'
import viteLogo from '../public/assets/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <header className="header">
        <h1>Simpl-Fy</h1>
        <nav>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="services">IT Support and Modern Solutions</section>
        <section id="about">About Simpl-Fy</section>
        <section id="contact">Contact Us</section>
      </main>

      <footer>
        <p>&copy; 2025 Simpl-Fy LLC</p>
      </footer>
    </>
  )
}

export default App
