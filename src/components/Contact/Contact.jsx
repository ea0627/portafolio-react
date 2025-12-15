import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SuccessPopup from "./SuccessPopup";
import "./contact.css";

const Contact = () => {
    const formRef = useRef(null);

    const [sending, setSending] = useState(false);
    const [successPopup, setSuccessPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setSending(true);

        const serviceID = "service_k8qa0li";
        const templateID = "template_m7rv5aj";
        const publicKey = "XwVEYYYIFMgBDZqDW";

        emailjs
            .sendForm(serviceID, templateID, formRef.current, publicKey)
            .then(() => {
                setSending(false);
                setSuccessPopup(true);
                formRef.current.reset();
            })
            .catch((error) => {
                console.error("Error al enviar mensaje:", error);
                setSending(false);
            });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-overlay"></div>

            {/* ⬇️ ESTE CONTENEDOR ES EL QUE FALTABA */}
            <div className="contact-container">
                <h2 className="contact-title">Contacto</h2>

                <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                    
                    <div className="form-group">
                        <label>Nombre</label>
                        <input
                            type="text"
                            name="user_name"
                            required
                            placeholder="Tu nombre"
                        />
                    </div>

                    <div className="form-group">
                        <label>Correo electrónico</label>
                        <input
                            type="email"
                            name="user_email"
                            required
                            placeholder="tucorreo@dominio.com"
                        />
                    </div>

                    <div className="form-group">
                        <label>Mensaje</label>
                        <textarea
                            name="message"
                            rows="5"
                            required
                            placeholder="Escribe tu mensaje aquí..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="contact-btn"
                        disabled={sending}
                    >
                        {sending ? "Enviando..." : "Enviar mensaje"}
                    </button>
                </form>
            </div>

            <SuccessPopup
                isOpen={successPopup}
                onClose={() => setSuccessPopup(false)}
            />
        </section>
    );
};

export default Contact;