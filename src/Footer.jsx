import { Divide } from "lucide-react";
import "./Footer.css";
import logo from "/assets/solano-logo2.png";
import useIsMobile from "./useIsMobile"; // make sure this exists

export default function Footer() {
  const isMobile = useIsMobile();

  return (
    <footer className="footer">
      <div className="footer-content">

        {isMobile ? (
          <>
            <a href="/" className="footer-logo" aria-label="Go to homepage">
              <img src={logo} alt="Solano Solar Cleaning Logo" />
            </a>

            <button
              data-token="c8f066ef224a4f0ea01d6fc1dca2ec0f"
              data-orgname="Solano-Solar-Cleaning-LLC"
              onClick={() =>
                window.open(
                  "https://client.housecallpro.com/customer_portal/request-link?token=c8f066ef224a4f0ea01d6fc1dca2ec0f",
                  "_blank"
                )
              }
              style={{
                backgroundColor: "#0f77cc",
                border: 0,
                borderRadius: "100px",
                color: "#fff",
                cursor: "pointer",
                padding: "12px 24px",
              }}
            >
              Customer Portal Login
            </button>

            <div className="footer-contact">
              <h3>Contact Us</h3>
              <p>
                <a href="mailto:solanosolarcleaning@gmail.com">
                  solanosolarcleaning@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+17076461859">(707) 646-1859</a>
              </p>
            </div>

            <div className="footer-social">
              <a
                href="https://www.facebook.com/solanosolarcleaning/"
                aria-label="Facebook"
                className="social-icon"
              ></a>
              <a href="#" aria-label="Instagram" className="social-icon"></a>
            </div>
            <div className="ISCA-Logo">
              <img src="/assets/isca-cert.png" className="w-40" />
            </div>
          </>
        ) : (
          <>
            <a href="/" className="footer-logo" aria-label="Go to homepage">
              <img src={logo} alt="Solano Solar Cleaning Logo" />
            </a>

            <div className="footer-contact">
              <h3>Contact Us</h3>
              <p>
                <a href="mailto:solanosolarcleaning@gmail.com">
                  solanosolarcleaning@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+17076461859">(707) 646-1859</a>
              </p>
            </div>

            <div className="footer-social">
              <a
                href="https://www.facebook.com/solanosolarcleaning/"
                aria-label="Facebook"
                className="social-icon"
              ></a>
              <a href="#" aria-label="Instagram" className="social-icon"></a>
            </div>

            <button
              data-token="c8f066ef224a4f0ea01d6fc1dca2ec0f"
              data-orgname="Solano-Solar-Cleaning-LLC"
              onClick={() =>
                window.open(
                  "https://client.housecallpro.com/customer_portal/request-link?token=c8f066ef224a4f0ea01d6fc1dca2ec0f",
                  "_blank"
                )
              }
              style={{
                backgroundColor: "#0f77cc",
                border: 0,
                borderRadius: "100px",
                color: "#fff",
                cursor: "pointer",
                padding: "12px 24px",
              }}
            >
              Customer Portal Login
            </button>

            <div className="ISCA-Logo">
              <img src="/assets/isca-cert.png" className="w-40" />
            </div>
          </>
        )}

      </div>
    </footer>
  );
}
