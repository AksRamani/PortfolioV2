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

function App() {
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
