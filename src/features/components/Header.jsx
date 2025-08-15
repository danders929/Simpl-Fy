import { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((v) => !v);

  useEffect(() => {
    const htmlEl = document.documentElement;
    const bodyEl = document.body;

    // Toggle classes for CSS hooks (and potential theming)
    bodyEl.classList.toggle("menu-open", menuOpen);
    htmlEl.classList.toggle("menu-open", menuOpen);

    // Accessibility: keep focus inside menu; disable background interactions
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    if (main) menuOpen ? main.setAttribute("inert", "") : main.removeAttribute("inert");
    if (footer) menuOpen ? footer.setAttribute("inert", "") : footer.removeAttribute("inert");

    if (menuOpen) {
      // --- Scroll lock (robust mobile + iOS) ---
      const scrollY = window.scrollY || window.pageYOffset;
      bodyEl.dataset.scrollY = String(scrollY); // stash it

      // Lock layout at current scrollpos
      bodyEl.style.position = "fixed";
      bodyEl.style.top = `-${scrollY}px`;
      bodyEl.style.left = "0";
      bodyEl.style.right = "0";
      bodyEl.style.width = "100%";

      // Also guard against overscroll/elastic bounce on some browsers
      htmlEl.style.overscrollBehavior = "none";
    }

    return () => {
      if (menuOpen) {
        // --- Unlock scroll and restore position ---
        const prevY = parseInt(bodyEl.dataset.scrollY || "0", 10) || 0;
        bodyEl.style.position = "";
        bodyEl.style.top = "";
        bodyEl.style.left = "";
        bodyEl.style.right = "";
        bodyEl.style.width = "";
        htmlEl.style.overscrollBehavior = "";
        delete bodyEl.dataset.scrollY;
        window.scrollTo(0, prevY);
      }
    };
  }, [menuOpen]);


  return (
    <header className="site-header">
      <div className="container nav">
        <a className="brand" href="#top" aria-label="Simpl-FY home">
          <img src="/assets/simpLogoV1.png" alt="Simpl-FY logo" />
          <span>Simpl-FY</span>
        </a>

        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact" className="btn ghost">Contact</a>
          <a href="#get-started" className="btn primary">Get started</a>
        </nav>

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

      <nav id="mobile-nav" className={`mobile-nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#features" onClick={toggleMenu}>Features</a>
        <a href="#about" onClick={toggleMenu}>About</a>
        <a href="#services" onClick={toggleMenu}>Services</a>
        <a href="#contact" className="btn ghost" onClick={toggleMenu}>Contact</a>
        <a href="#get-started" className="btn primary" onClick={toggleMenu}>Get started</a>
      </nav>
    </header>
  );
}
