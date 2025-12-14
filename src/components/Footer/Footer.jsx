import "./footer.css";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer">

            {/* Línea decorativa superior */}
            <div className="footer-line"></div>

            <div className="footer-content">

                {/* Logo */}
                <h3 className="footer-logo">E.A.</h3>

                {/* Texto descriptivo */}
                <p className="footer-text">
                    Desarrollado por Eduardo Amaya — Front-End Developer
                </p>

                {/* Iconos sociales */}
                <div className="footer-socials">

                    <a
                        href="https://github.com/ea0627"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="footer-icon"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/ea0627/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="footer-icon"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://x.com/eandres627"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X (Twitter)"
                        className="footer-icon"
                    >
                        <FaXTwitter />
                    </a>

                </div>
            </div>

            {/* Derechos */}
            <p className="footer-copy">
                © {new Date().getFullYear()} — Inspirado en Williams F1 | React + Vite
            </p>
        </footer>
    );
};

export default Footer;