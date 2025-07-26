import { useState } from 'react';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
      <a href="/" className="solano-logo" aria-label="Go to homepage">
          <img id="header-img" src="/assets/solano-logo.jpg" alt="Solano Solar Logo" />
        </a>

        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <a href="#services">Services</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="navbar-right">
          <a href="tel:+17076461859" className="book-button" aria-label="Book Your Service">
            <div className="main-heading-group">
              <div className="button-icon-start"></div>
              <div className="main-heading-button">(707) 646-1859</div>
              <div className="button-icon-end"></div>
            </div>
          </a>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            &#9776;
          </button>
        </div>
      </div>
    </header>
  );
}
