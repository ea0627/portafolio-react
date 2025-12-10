import { useEffect } from "react";
import "./about.css";
import profileImg from "/about.png";
import aboutBg from "/about-bg.png";

const About = () => {

    // PARALLAX + OSCURECIMIENTO
    useEffect(() => {
        const section = document.querySelector(".about-section");
        if (!section) return;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const isMobile = window.innerWidth < 768;

            const offsetY = isMobile ? scrollY * 0.05 : scrollY * 0.15;
            section.style.backgroundPosition = `center ${offsetY}px`;

            const darken = Math.min(scrollY / 800, 0.35);
            section.style.filter = `brightness(${1 - darken})`;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // SCROLL REVEAL
    useEffect(() => {
        const revealElements = document.querySelectorAll(".reveal");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("revealed");
                    }
                });
            },
            { threshold: 0.2 }
        );

        revealElements.forEach((el) => observer.observe(el));
    }, []);

    return (
        <section
            id="about"
            className="about-section"
            style={{ backgroundImage: `url(${aboutBg})` }}
        >
            <div className="about-overlay"></div>

            <div className="about-wrapper about-container">

                {/* Imagen */}
                <figure className="about-image reveal">
                    <img src={profileImg} alt="Eduardo Amaya" />
                </figure>

                {/* Texto principal */}
                <div className="about-content">

                    <h2 className="about-title reveal">Sobre Mí</h2>

                    <p className="about-description reveal" style={{ transitionDelay: "0.1s" }}>
                        Soy <strong>Eduardo Amaya</strong>, desarrollador Front-End impulsado por la 
                        precisión, la claridad visual y la ingeniería detrás del software moderno.
                    </p>

                    <p className="about-description reveal" style={{ transitionDelay: "0.2s" }}>
                        Trabajo con <strong>React, Vite y diseño responsivo</strong> para crear experiencias
                        sólidas y bien construidas, aplicando lo aprendido en 
                        <strong> TripleTen</strong> y <strong>Alura / ONE G6</strong>.
                    </p>

                    {/* GRID DE ESPECIFICACIONES */}
                    <div className="spec-grid">
                        <article className="spec-card reveal" style={{ transitionDelay: "0.3s" }}>
                            <h3>📦 Especialidad</h3>
                            <p>Interfaces modernas y optimizadas.</p>
                        </article>

                        <article className="spec-card reveal" style={{ transitionDelay: "0.4s" }}>
                            <h3>⚡ Stack Principal</h3>
                            <p>React · Vite · JavaScript · CSS</p>
                        </article>

                        <article className="spec-card reveal" style={{ transitionDelay: "0.5s" }}>
                            <h3>🏎️ Filosofía</h3>
                            <p>Precisión, rendimiento y mejora continua.</p>
                        </article>

                        <article className="spec-card reveal" style={{ transitionDelay: "0.6s" }}>
                            <h3>🎓 Formación</h3>
                            <p>TripleTen · Alura · ONE G6</p>
                        </article>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;