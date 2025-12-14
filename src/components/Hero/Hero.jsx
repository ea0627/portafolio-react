import { useEffect } from "react";
import "./hero.css";

const Hero = () => {
    /* ============================================================
       SCROLL EFFECTS: PARALLAX + BRIGHTNESS + BLUR
       ============================================================ */
    useEffect(() => {
        const hero = document.querySelector(".hero");
        if (!hero) return;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const isMobile = window.innerWidth < 768;
            const isLight = document.documentElement.classList.contains("light-theme");

            /* ---------------------------
               PARALLAX / NO-PARALLAX MOBILE
               --------------------------- */
            if (isMobile) {
                // En móvil: foto fija, sin parallax
                hero.style.backgroundPosition = "center";
            } else {
                const offsetY = scrollY * 0.1;   // antes 0.2 → más natural
                const offsetX = scrollY * 0.03; // antes 0.05 → menos drift lateral
                hero.style.backgroundPosition = `${offsetX}px ${offsetY}px`;
            }

            /* ---------------------------
               BRIGHTNESS CALIBRATED
               --------------------------- */
            const brightness = isLight
                ? Math.max(1 - scrollY / 1400, 0.93) // modo claro más suave
                : Math.max(1 - scrollY / 900, 0.85);

            /* ---------------------------
               BLUR CONTROL
               --------------------------- */
            const blurAmount = Math.min(scrollY / 180, 2); // antes 3 → mejor nitidez

            hero.style.filter = `brightness(${brightness}) blur(${blurAmount}px)`;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /* ============================================================
       GLOW INTERACTIVO EN EL TEXTO DEL HERO
       ============================================================ */
    useEffect(() => {
        const title = document.querySelector(".hero-title");
        if (!title) return;

        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = (e.clientY / window.innerHeight) * 2 - 1;

            const intensity = 15;
            const glowX = x * intensity;
            const glowY = y * intensity;

            title.style.textShadow = `
                ${glowX}px ${glowY}px 18px rgba(0, 174, 255, 0.55),
                ${-glowX}px ${-glowY}px 25px rgba(0, 174, 255, 0.25)
            `;
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    /* ============================================================
       JSX MARKUP
       ============================================================ */
    return (
        <section id="hero" className="hero hero-banner">
            <div className="hero-overlay"></div>

            <div className="hero-content banner-content hero-text">
                <h1 className="hero-title">
                    Eduardo Amaya
                    <span className="hero-subtitle">Front-End Developer</span>
                </h1>

                <p className="hero-description">
                    Construyendo interfaces tan precisas como la telemetría de la Fórmula 1.
                </p>

                <div className="hero-buttons">
                    <a href="#projects" className="btn-primary">Ver proyectos</a>
                    <a href="#about" className="btn-secondary">Sobre mí</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

