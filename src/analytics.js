import ReactGA from "react-ga4";

export const initGA = () => {
  const gaId = import.meta.env.VITE_GA_ID;

  if (!gaId) return;
  ReactGA.initialize(gaId);
};

export const trackPageView = (url) => {
  const gaId = import.meta.env.VITE_GA_ID;

  if (!gaId) return;
  ReactGA.send({
    hitType: "pageview",
    page: url,
  });
};