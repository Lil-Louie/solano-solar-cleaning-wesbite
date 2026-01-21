import { useState } from 'react';
import './Header.css';
import logo from '/assets/solano-logo2.png'; 


export default function Header() {

  return (
      <header className="navbar">
      <div className="navbar-container">
        <div className="flex align-center">

        <div className="brand-row">
          <a href="/" className="solano-logo" aria-label="Go to homepage">
            <img src={logo} alt="Solano Solar Cleaning Logo" />
          </a>

          <section className="isca-cert">
            <img src="/assets/isca-cert.png" alt="ISCA Certification" />
          </section>
        </div>

        </div>



        <div className="navbar-right">
          <a href="tel:+17076461859" className="call-button">
            (707) 646-1859
          </a>

        </div>
      </div>
    </header>

  );
}

