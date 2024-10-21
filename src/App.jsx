import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  useEffect(() => {
    const neonCursor = document.querySelector('.neon-cursor');
    const links = document.querySelectorAll('nav a');

    const handleMouseMove = (event) => {
      neonCursor.style.left = `${event.pageX}px`; // Fare X koordinatını ayarla
      neonCursor.style.top = `${event.pageY}px`; // Fare Y koordinatını ayarla
      
      // Linklerin üzerinde olup olmadığını kontrol et
      let isOverLink = false;
      links.forEach(link => {
        const rect = link.getBoundingClientRect();
        if (
          event.clientX >= rect.left &&
          event.clientX <= rect.right &&
          event.clientY >= rect.top &&
          event.clientY <= rect.bottom
        ) {
          isOverLink = true;
          neonCursor.style.background = 'blue'; // Linkin üzerine gelince neon imlecin rengini mavi yap
        }
      });

      // Linkin üzerinde değilse, varsayılan rengi geri yükle
      if (!isOverLink) {
        neonCursor.style.background = 'linear-gradient(135deg, #ff0055, #00ffea, #00ff55, #ffea00)';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Temizlik işlemi
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <div className="neon-cursor"></div> {/* Neon imleç */}
      </div>
    </BrowserRouter>
  );
}

export default App;
