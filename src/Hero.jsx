import './Hero.css';

export default function Hero() {
  return (
<section>

      {/* Hero Information Below Carousel */}
<div className="hero-info">
  <div className="hero-card">
    <h1>Experience Premier Solar Panel Cleaning with Solano Solar Cleaning!</h1>
    <p>Protect the quality of your solar investment with Solano Solar Cleaning – expert solar panel care for peak performance and longer lifespan.</p>

    <div className="info-columns">
      <div className="info-column">
        <h3>Areas Serviced:</h3>
        <ul className="areas-list">
          <li>Cordelia</li>
          <li>Fairfield</li>
          <li>Suisun City</li>
          <li>Vacaville</li>
          <li>Winters</li>
          <li>Dixon</li>
        </ul>
      </div>

      <div className="info-column">
        <h3>More Cities:</h3>
        <ul className="areas-list-1">
          <li>Santa Rosa</li>
          <li>Napa</li>
          <li>Sonoma</li>
          <li>Petaluma</li>
          <li>Rohnert Park</li>
          <li>Novato</li>
        </ul>
      </div>

      <div className="info-column">
        <h3>Services Provided:</h3>
        <ul>
          <li>Solar Panel Cleaning</li>
          <li>Solar Panel Bird Proofing</li>
          <li>Gutter Cleaning</li>
          <li>Bird Spike Installation</li>
        </ul>
      </div>
    </div>
  </div>
</div>



 </section>
  );
}
