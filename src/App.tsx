import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Testimonial from "./components/Testimonial";
import Slider from "./components/Slider";
import Skills from "./components/Skills";
import { useEffect, useState } from "react";

function App() {
  const [scrollDirection, setScrollDirection] = useState('Scrolling up');

  useEffect(() => {
      let lastScrollTop = 0;

      const handleScroll = () => {
          const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
          console.log("lastScrollTop",currentScrollTop)
          if (currentScrollTop > lastScrollTop && currentScrollTop > 50) {
              setScrollDirection('Scrolling down');
          } else {
              setScrollDirection('Scrolling up');
          }

          lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
      };

      window.addEventListener('scroll', handleScroll);

      // Cleanup function to remove the event listener
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  useEffect(() => {
    const navbar = document.querySelector('#navbar')
    if (scrollDirection == "Scrolling up") {
      navbar?.classList.remove("navbar-hidden")
    } else {
      navbar?.classList.add("navbar-hidden")
      
    }
  }, [scrollDirection])
  

  return (
    <main className="font-bodyFont w-full h-auto bg-bodyColor text-lightText ">
      <Navbar />
      <div className="px-4">
        <div className="max-w-screen-xl mx-auto">
          <Banner />
          <Slider />
          <Feature />
          <Projects />
          <Resume />
          <Skills/>
          <Testimonial />
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;
