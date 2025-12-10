// Más adelante agregaremos estos componentes
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
// import Skills from "./components/Skills/Skills";
// import Projects from "./components/Projects/Projects";
// import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      {/* Botón Tema Claro / Oscuro */}
      <Navbar />
      <Hero />
      <About />
    </>
  );
}

export default App;
