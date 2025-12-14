<h1 align="center">🚀 Portafolio React — Eduardo Amaya</h1> <p align="center"> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /> <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" /> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" /> <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" /> <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" /> </p>

Portafolio profesional construido con React + Vite, inspirado en la estética moderna, limpia y técnica de la escudería Williams F1.
Diseñado para ofrecer una experiencia visual cuidada, animaciones suaves, modo claro/oscuro, arquitectura escalable y despliegue automático con Vercel.

🏎️ Identidad Visual — Inspirado en Williams F1

El diseño sigue una línea estética de ingeniería, precisión y telemetría:

Cyan: #00AEEF

Dark Blue: #002F5E

Soft White: #F2F4F8

Black: #0A0A0A

Sky Blue: #38C7FF

🌗 Modo Claro / Oscuro Avanzado

El proyecto utiliza:

Variables CSS dinámicas

Clase global .light-theme

Persistencia estética coherente

Ajustes automáticos de contraste

Overlays inteligentes para cada sección

Microinteracciones visuales según el modo

Ajustes clave:

✔ Hero

Brillo y blur según scroll, con contraste especial para modo claro.

✔ About

Overlay técnico y fondo con parallax optimizado.

✔ Skills

Fondo técnico con parallax y capa de lectura clara.

✔ Footer

Contraste automático e iconos adaptados.

🏁 Avance Actual del Proyecto
✔ Navbar Profesional F1-Style

Diseño translúcido + glassmorphism

Menú móvil tipo drawer con overlay

Toggle de modo claro/oscuro

Logo navegable hacia el Hero

Animación al hacer scroll (shrink + borde reactivo)

✔ Hero Cinematográfico con Efectos Dinámicos

Imagen full-width optimizada

Parallax inteligente (desktop) y centrado estable en mobile

Blur + brillo dinámico según scroll

Overlay adaptable a light/dark mode

Título principal con efecto glow reactivo al mouse

Botones estilizados

Animaciones de entrada suaves

✔ Sección About — Ficha Técnica Estilo Ingeniería

Fondo tipo paddock con parallax

Overlay optimizado para lectura

Tarjetas tipo panel técnico

Fotografía con borde cyan + glow

Animación de entrada por delays

Scroll reveal progresivo

✔ Sección Skills — Telemetría F1

Fondo técnico con sensores y pantallas realistas

Parallax en desktop

Overlay con brillo adaptativo

Tarjetas estilo glassmorphism

Barras con gradiente Williams

Íconos por habilidad

Porcentajes profesionales reales

Animaciones reveal independientes

✔ Footer Moderno

Línea superior estilo Williams

Íconos interactivos de redes

Botón "Back to Top" animado

Adaptación total a modo claro/oscuro

Diseño minimalista y coherente

🧱 Arquitectura del Proyecto
src/
├── assets/
│   ├── images/
│   └── icons/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── Skills/
│   ├── Projects/
│   └── Contact/
├── data/
│   └── projects.json
├── hooks/
│   └── useFetchProjects.js
├── utils/
│   └── animations.js
├── styles/
│   ├── global.css
│   └── variables.css
├── App.jsx
└── main.jsx

⚙️ Tecnologías Utilizadas
Frontend

React

Vite

CSS Modules

Variables CSS

React Icons

Intersection Observer

Parallax Engine Custom

Framer Motion (próximamente)

Infraestructura

Git & GitHub

Vercel (CI/CD + hosting)

🛠️ Tech Stack












🚧 Estado del Proyecto

✔ Implementado hasta ahora

Configuración base con Vite

Arquitectura modular

Modo claro/oscuro avanzado

Navbar responsivo

Hero cinematográfico con parallax

About técnico con reveal

Skills estilo telemetría

Footer con botón Back-to-Top

Animaciones globales

Deploy activo en Vercel

Sincronización CI/CD con GitHub

🔜 Próximos Pasos
🟦 Projects Section

Tarjetas dinámicas tipo dashboard F1

Consumo de GitHub API o JSON local

Animaciones de hover estilo “panel de datos”

🟦 Contact Section

Formulario con EmailJS

Diseño futurista tipo terminal

Validación reactiva

🟦 Animaciones Globales

Microinteracciones avanzadas con Framer Motion

Scrollspy para navegación viva

🧪 Cómo Ejecutar el Proyecto
1️⃣ Clonar repositorio
git clone https://github.com/ea0627/portafolio-react.git

2️⃣ Instalar dependencias
npm install

3️⃣ Ejecutar en modo desarrollo
npm run dev

4️⃣ Compilar para producción
npm run build

🌐 Deploy en Vercel

Versión en desarrollo:
👉 https://portafolio-ea.vercel.app

🎓 Formaciones Relacionadas

Este proyecto forma parte de mi proceso de aprendizaje profesional con:

TripleTen — Programa de Desarrollo Web

Alura Latam

Oracle Next Education (ONE) — G6

Estas formaciones han sido clave para fortalecer buenas prácticas, arquitectura escalable y mentalidad de crecimiento.

🧑‍💻 Autor

Eduardo Amaya
Desarrollador Front-End

GitHub: https://github.com/ea0627

LinkedIn: https://www.linkedin.com/in/eduardo-amaya-m/

⭐ Si te gusta este proyecto…

No dudes en dejar una estrella ⭐ en el repositorio.
¡Seguimos construyendo! 🏎️⚡💙