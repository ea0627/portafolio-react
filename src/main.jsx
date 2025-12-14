import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css';
import './styles/variables.css';

import { initGA } from "./analytics";

initGA(); // 🔥 Activa Google Analytics apenas carga la app

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
