import ReactGA from "react-ga4";

// Inicializar Google Analytics
export const initGA = () => {
  ReactGA.initialize("G-PZYL1GB5IT"); // 👉 TU ID DE GOOGLE ANALYTICS
};

// Registrar vistas de página
export const trackPageView = (url) => {
    ReactGA.send({
        hitType: "pageview",
        page: url,
    });
};
