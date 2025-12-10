<h1 align="center">🚀 Portafolio React — Eduardo Amaya</h1>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
</p>


Portafolio profesional desarrollado con **React + Vite**, diseñado con enfoque modular, alto rendimiento y una identidad visual inspirada en la escudería **Williams F1**.  
Integra un sistema de **dark/light mode**, CI/CD con **Vercel**, y una arquitectura escalable pensada para crecer con nuevos proyectos, animaciones y APIs.

---

## 🏎️ Diseño Inspirado en Williams F1
Este proyecto utiliza una paleta inspirada en el equipo Williams F1:

- **Cyan:** #00AEEF  
- **Dark Blue:** #002F5E  
- **Soft White:** #F2F4F8  
- **Black:** #0A0A0A  
- **Sky Blue:** #38C7FF  

Toda la UI está construida con estos colores, adaptándose automáticamente según el modo día/noche.

---

## 🌗 Modo Claro / Oscuro (Theme Toggle)
El portafolio implementa un sistema de theming basado en:

- Variables CSS dinámicas  
- Clase global `.light-theme`  
- React Hooks para manejar estado  
- Persistencia visual elegante  

---

🏎️ Avance Actual del Proyecto

Hasta hoy, el portafolio incluye:

✅ Navbar responsivo estilo F1

    Glassmorphism
    Modo mobile con menú lateral animado
    Botón de modo claro/oscuro
    Logo navegable hacia el Hero

✅ Hero Banner Cinematográfico

    Imagen full-width
    Parallax dinámico
    Efecto de brillo y blur según scroll
    Animaciones de entrada
    Botones principales

✅ Sección About — Ficha Técnica

    Inspirada en paneles técnicos de ingeniería F1:
    Fondo con parallax
    Overlay para lectura óptima
    Foto con glow técnico
    Texto profesional
    Scroll Reveal al estilo sitios premium
    Tarjetas con efectos glass y hover animado

✔ Versión escritorio

    Layout con glassmorphism
    Links con subrayado animado
    Toggle de tema integrado en el nav
    Scroll con efecto oscuro (scrolled state)

✔ Versión móvil

    Menú lateral tipo drawer
    Animación suave + overlay difuminado
    Botón hamburguesa minimalista
    Botón cerrar (✕) con animación
    Toggle reubicado en la cabecera del menú
    Enlaces con hover desplazado
    Organización visual moderna y limpia

Este Navbar mejora radicalmente la experiencia UX/UI del proyecto.

---

## 🧱 Arquitectura del Proyecto

```bash
src/
├── assets/
│ ├── images/
│ └── icons/
├── components/
│ ├── Navbar/
│ ├── Hero/
│ ├── About/
│ ├── Skills/
│ ├── Projects/
│ └── Contact/
├── data/
│ └── projects.json
├── hooks/
│ └── useFetchProjects.js
├── utils/
│ └── animations.js
├── styles/
│ ├── global.css
│ └── variables.css
├── App.jsx
└── main.jsx
```

---

## ⚙️ Tecnologías Utilizadas

### **Frontend**
- React  
- Vite  
- CSS Modules  
- Variables CSS  
- React Icons  
- Framer Motion (próximamente)

### **Infraestructura**
- Git & GitHub  
- Vercel (CI/CD + hosting)  

---

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

---

## 🚧 Estado del Proyecto

✔ Implementado hasta ahora

    Configuración base con Vite
    Arquitectura modular
    Modo claro/oscuro
    Theme Toggle funcional
    Navbar responsivo completo (escritorio + móvil)
    Animaciones base de UI
    Deploy activo en Vercel
    Sincronización CI/CD con GitHub

---

🚧 Próximos Pasos

    🔜 Skills Section
    Tarjetas dinámicas tipo telemetría con barras animadas.

    🔜 Projects Section
    Integración con GitHub API o JSON local + tarjetas interactivas F1-style.

    🔜 Contact Section
    Formulario con EmailJS y diseño futurista.

    🔜 Footer técnico
    Estilo minimalista, con líneas y acentos en cyan.

## 🧪 Cómo Ejecutar el Proyecto

### 1️⃣ Clonar repositorio
```bash
git clone https://github.com/ea0627/portafolio-react.git
```

2️⃣ Instalar dependencias
```bash
npm install
```

3️⃣ Correr en modo desarrollo
```bash
npm run dev
```

4️⃣ Compilar para producción
```bash
npm run build
```

🌐 Deploy en Vercel

Versión en desarrollo:
👉 https://portafolio-ea.vercel.app

🎓 Formaciones Relacionadas

Este proyecto forma parte de mi proceso de aprendizaje profesional con:

    TripleTen — Programa de Desarrollo Web
    Alura Latam
    Oracle Next Education (ONE) — G6

Estas formaciones han sido clave para fortalecer mi base técnica, buenas prácticas y mentalidad de crecimiento.

🧑‍💻 Autor

Eduardo Amaya
Desarrollador Front-End

GitHub: https://github.com/ea0627
LinkedIn: https://www.linkedin.com/in/eduardo-amaya-m/

⭐ Si te gusta este proyecto…

No dudes en dejar una estrella ⭐ en el repositorio.
¡Seguimos construyendo! 🏎️⚡💙
