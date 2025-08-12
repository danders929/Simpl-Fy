import "./Header.css";

//Header with logo, company name, and nav-links
export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        {/* Brand logo and name */}
        <a className="brand" href="#top" aria-label="Simpl-FY home">
          <img src="/assets/simpLogoV1.png" alt="Simpl-FY logo" />
          <span>Simpl-FY</span>
        </a>
        {/* Navigation Links */}
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact" className="btn ghost">Contact</a>
          <a href="#get-started" className="btn primary">Get started</a>
        </nav>
      </div>     
    </header>
  );
}
