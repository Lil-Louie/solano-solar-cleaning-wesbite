import { useState } from 'react';
import './Header.css';
import logo from '/assets/solano-logo2.png'; 


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="/" className="solano-logo" aria-label="Go to homepage">
          <img src={logo} alt="Solano Solar Cleaning Logo" />
        </a>

        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <a href="#services">Services</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="navbar-right">
          {/* Call Button - visible only on desktop */}
          <a href="tel:+17076461859" className="call-button">
            (707) 646-1859
          </a>
        </div>
      </div>
    </header>
  );
}
