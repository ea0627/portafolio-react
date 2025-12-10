import { useEffect } from "react";
import "./hero.css";

const Hero = () => {

    useEffect(() => {
        const hero = document.querySelector(".hero");
        if (!hero) return;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const isMobile = window.innerWidth < 768;

            if (isMobile) {
                // ✔ En mobile: NO PARALLAX, imagen centrada siempre
                hero.style.backgroundPosition = "center";
            } else {
                // ✔ Desktop con parallax dinámico
                const offsetY = scrollY * 0.2;
                const offsetX = scrollY * 0.05;
                hero.style.backgroundPosition = `${offsetX}px ${offsetY}px`;
            }

            // ✔ Blur + brightness en ambos
            const blurAmount = Math.min(scrollY / 150, 3);
            const brightness = Math.max(1 - scrollY / 800, 0.85);

            hero.style.filter = `brightness(${brightness}) blur(${blurAmount}px)`;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    useEffect(() => {
        const title = document.querySelector(".hero-title");

        if (!title) return;

        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth) * 2 - 1;  
            const y = (e.clientY / window.innerHeight) * 2 - 1;

            // Intensidad suave
            const intensity = 15;

            const glowX = x * intensity;
            const glowY = y * intensity;

            title.style.textShadow = `
            ${glowX}px ${glowY}px 18px rgba(0, 174, 255, 0.55),
            ${-glowX}px ${-glowY}px 25px rgba(0, 174, 255, 0.25)
            `;
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
        }, []);


    return (
        <section className="hero hero-banner">
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
