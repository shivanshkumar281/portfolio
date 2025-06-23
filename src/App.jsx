import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects"
import Testimonial from "./sections/Testimonial"
import Experiences from "./sections/Experiences"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
  }, []);
  return ( <div className="container mx-auto max-w-7xl">
     <Navbar /> 
     <Hero />
    <About />
     <Projects />
     <Experiences />
     <Contact />
     <Footer />
     </div>
  );
};

export default App;