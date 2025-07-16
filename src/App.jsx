import { useEffect } from 'react';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  // Add smooth scroll behavior
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Smooth scroll for anchor links
      const smoothScroll = (e) => {
        // Only handle links that start with #
        if (e.currentTarget.getAttribute('href').startsWith('#')) {
          e.preventDefault();
          const targetId = e.currentTarget.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      };

      // Add smooth scroll to all anchor links that start with #
      const anchorLinks = document.querySelectorAll('a[href^="#"]');
      anchorLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
      });

      return () => {
        anchorLinks.forEach(link => {
          link.removeEventListener('click', smoothScroll);
        });
      };
    }
  }, []);

  return (
    <div className="App">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
