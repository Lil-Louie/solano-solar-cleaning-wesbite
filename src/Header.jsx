import { useState } from 'react';
import './Header.css';
import logo from '/assets/solano-logo2.png'; 


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className='flex align-center'>
        <a href="/" className="solano-logo" aria-label="Go to homepage">
          <img src={logo} alt="Solano Solar Cleaning Logo" />
        </a>
        <section  className='ISCA-CERT w-35'>
          <img src= "/assets/isca-cert.png"/>  
        </section>
        </div>


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
