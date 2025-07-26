import { useState } from 'react';
import './App.css'; 
import Header from './Header';
import  Carousel  from './Carousel';
import Hero from './Hero';
import Services from './Services';
import Services_rows from './Services_rows';
import FAQSection from './FAQsection';
import Footer from './Footer';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Header/>

      <main>
      <Carousel />
        <section id='services'>
          {/*<Services />*/}
          <Services_rows /> 
         </section>

        <section id='faq'>
          <FAQSection />
        </section>
      </main>

      <section id='contact'>
        <Footer />
      </section>

    </div>
  );
}
