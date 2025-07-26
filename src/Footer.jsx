import './Footer.css';
import logo from '/assets/solano-logo.jpg'; 

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
      <a href="/" className="solano-logo" aria-label="Go to homepage">
        <img src={logo} alt="Solano Solar Cleaning Logo" />
      </a>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><a href="mailto:solanosolarcleaning@gmail.com">solanosolarcleaning@gmail.com</a></p>
          <p><a href="tel:+17076461859">(707) 646-1859</a></p>
        </div>

        <div className="footer-social">
          <a href="https://www.facebook.com/solanosolarcleaning/" aria-label="Facebook" className="social-icon"></a>
          <a href="#" aria-label="Instagram" className="social-icon"></a>
        </div>
      </div>
    </footer>
  );
}
