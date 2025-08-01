import './Services.css';

export default function Services() {
  return (
    <section className="services-pricing" id="pricing">
      <h2>Our Services</h2>
      <div className="service-columns">

        {/* Bird Proofing */}
        <div className="service-card">
          <img src="/assets/service-1.webp" alt="Bird Proofing" className="service-img" />
          <div className='card-body'>
            <h3>Bird Proofing Your Solar Panels</h3>
            <p><strong>*Prices Starting at $6.50 Per Linear Foot</strong></p>
            <p>
              Don’t let birds compromise the efficiency and longevity of your solar panels!
              Our expert bird-proofing services are designed to safeguard your solar investment 
              from nesting debris, droppings, and damage caused by persistent pests.
            </p>
            <p>
              Our team uses durable, eco-friendly solutions to create an effective barrier around your solar
              panels without harming wildlife. From stainless steel mesh to custom deterrents, we provide a seamless,
              non-invasive installation to ensure lasting protection.
            </p>
            <a href="tel:+17076461859" className="book-now-button" id='1'>Book Now</a>
          </div>
        </div>


        {/* Solar Panel Cleaning */}
        <div className="service-card">
          <img src="/assets/service-2.webp" alt="Solar Panel Cleaning" className="service-img" />
          <div className='card-body'>
            <h3>Expert Residential Solar Panel Washing</h3>
            <p >
              <strong>Single Story:</strong> $150 (20 panels)<br />
              <strong>Two Story:</strong> $200 (20 panels)
            </p>
            <p>
              We use a specialized brush designed specifically for solar panel cleaning to enhance 
              solar efficiency and longevity. Regular washing helps your panels operate at peak performance.
            </p>
            <a href="tel:+17076461859" className="book-now-button" id='2'>Book Now</a>
          </div>
        </div>


        {/* Gutter Cleaning */}
        <div className="service-card">
          <img src="/assets/service-3.webp" alt="Gutter Cleaning" className="service-img" />
          <div className='card-body'>
            <h3>Gutter Cleaning Services</h3>
            <p><strong>Call to get an estimate</strong></p>
            <p>
              Don’t let clogged gutters cause unnecessary water damage to your home!
              Our quality care clears the path for water to exit your roof and prevents buildup that could
              rot your roofing or fascia.
            </p>
            <a href="tel:+17076461859" className="book-now-button" id='3'>Book Now</a>
          </div>
        </div>
      </div>
    </section>
  );
}
