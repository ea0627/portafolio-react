import { useState, useEffect } from "react";
import ThemeToggle from "../ThemeToggle";
import "./navbar.css";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
                <a href="#hero" className="logo">E.A.</a>

                <ul className="navLinks">
                    <li><a href="#about">Sobre mí</a></li>
                    <li><a href="#skills">Habilidades</a></li>
                    <li><a href="#projects">Proyectos</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>

                <div className="toggleWrapper">
                    <ThemeToggle />
                </div>

                {/* Botón hamburguesa */}
                <div className="hamburger" onClick={() => setMenuOpen(true)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>

            {/* Overlay */}
            <div
                className={`overlay ${menuOpen ? "show" : ""}`}
                onClick={() => setMenuOpen(false)}
            />

            {/* Menú móvil */}
            <div className={`mobileMenu ${menuOpen ? "open" : ""}`}>

                {/* Nuevo header del menú */}
                <div className="mobileMenuHeader">

                    {/* Toggle a la izquierda */}
                    <div className="mobileToggleLeft">
                        <ThemeToggle />
                    </div>

                    {/* Botón cerrar */}
                    <button className="closeBtn" onClick={() => setMenuOpen(false)}>✕</button>
                </div>

                {/* Enlaces */}
                <a href="#about" onClick={() => setMenuOpen(false)}>Sobre mí</a>
                <a href="#skills" onClick={() => setMenuOpen(false)}>Habilidades</a>
                <a href="#projects" onClick={() => setMenuOpen(false)}>Proyectos</a>
                <a href="#contact" onClick={() => setMenuOpen(false)}>Contacto</a>

            </div>
        </>
    );
};

export default Navbar;
