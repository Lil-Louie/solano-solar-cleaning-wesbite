import { useState } from 'react';
import Header from './Header';
import Carousel from './Carousel';
import Services_rows from './Services_rows';
import Reviews from './Reviews';
import FAQSection from './FAQsection';
import Footer from './Footer';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app bg-gradient-to-t from-black to-blue-900" >
      <title className=''>Solano Solar Cleaning</title>
      <Header />
      <main>
        <Carousel />
        <section id="services">
          <Services_rows />
        </section>
        <section id="reviews">
          <Reviews />
        </section>
        <section id="faq">
          <FAQSection />
        </section>
      </main>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}
