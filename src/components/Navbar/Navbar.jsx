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
                <div className="logo">E.A.</div>

                <ul className="navLinks">
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
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
                <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
                <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

            </div>
        </>
    );
};

export default Navbar;
