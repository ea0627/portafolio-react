import { useEffect, useRef } from "react";
import "./successpopup.css";

const SuccessPopup = ({ isOpen, onClose }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            const audio = new Audio("/sounds/success-sound.wav");
            audio.volume = 0.4;
            audio.play().catch((err) => console.log("Autoplay bloqueado:", err));
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-box" onClick={(e) => e.stopPropagation()}>
                <h3 className="popup-title">¡Mensaje enviado! 🎉</h3>
                <p className="popup-text">
                    Gracias por contactarme. Responderé pronto.
                </p>

                <button className="popup-button" onClick={onClose}>
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default SuccessPopup;
