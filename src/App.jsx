import ThemeToggle from "./components/ThemeToggle";

// Más adelante agregaremos estos componentes
// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import About from "./components/About/About";
// import Skills from "./components/Skills/Skills";
// import Projects from "./components/Projects/Projects";
// import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      {/* Botón Tema Claro / Oscuro */}
      <ThemeToggle />

      {/* Mientras no tengamos secciones, ponemos un texto temporal */}
      <h1 style={{ padding: "40px", textAlign: "center" }}>
        Portafolio de Eduardo Amaya 🚀
      </h1>
    </>
  );
}

export default App;
