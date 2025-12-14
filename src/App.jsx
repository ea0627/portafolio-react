import { useEffect } from "react";
import { trackPageView } from "./analytics";

// Componentes
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/BackToTop/BackToTop";

function App() {
  // Registrar solo UNA vista al cargar la aplicación
  useEffect(() => {
    trackPageView("/"); 
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
