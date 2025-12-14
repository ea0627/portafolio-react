import { useEffect } from "react";
import "./skills.css";
import bgSkills from "/skills-bg.png";

const skillsData = [
    { name: "React", value: 90, icon: "⚛️" },
    { name: "JavaScript", value: 85, icon: "📜" },
    { name: "Vite", value: 90, icon: "⚡" },
    { name: "HTML5", value: 95, icon: "🧩" },
    { name: "CSS3", value: 90, icon: "🎨" },
    { name: "Git", value: 80, icon: "🔧" },
    { name: "GitHub", value: 75, icon: "🦾" }
];

const Skills = () => {

    useEffect(() => {
        const section = document.querySelector(".skills-section");
        if (!section) return;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const isMobile = window.innerWidth < 768;

            // Ajustes calibrados
            const baseOffset = isMobile ? -70 : -180;
            const parallax = scrollY * 0.05;

            section.style.backgroundPosition = `center ${baseOffset + parallax}px`;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            id="skills"
            className="skills-section"
            style={{ backgroundImage: `url(${bgSkills})` }}
        >
            <div className="skills-overlay"></div>

            <div className="skills-container reveal">
                <h2 className="skills-title">Habilidades</h2>

                <div className="skills-grid">
                    {skillsData.map((skill, index) => (
                        <div key={index} className="skill-card reveal">
                            <div className="skill-header">
                                <span className="skill-icon">{skill.icon}</span>
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-value">{skill.value}%</span>
                            </div>

                            <div className="skill-bar">
                                <div
                                    className="skill-progress"
                                    style={{ width: `${skill.value}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
