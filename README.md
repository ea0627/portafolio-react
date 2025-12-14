<h1 align="center">🚀 Portafolio React — Eduardo Amaya</h1>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
</p>

Portafolio profesional construido con **React + Vite**, inspirado en la estética moderna, limpia y técnica de la escudería **Williams F1**.  
Diseñado para ofrecer una experiencia visual cuidada, animaciones suaves, modo claro/oscuro, arquitectura escalable y despliegue automático con Vercel.

---

# 🏎️ Identidad Visual — Inspirado en Williams F1

El diseño sigue una línea estética de ingeniería, precisión y telemetría:

- **Cyan:** `#00AEEF`  
- **Dark Blue:** `#002F5E`  
- **Soft White:** `#F2F4F8`  
- **Black:** `#0A0A0A`  
- **Sky Blue:** `#38C7FF`

---

# 🌗 Modo Claro / Oscuro Avanzado

El proyecto utiliza:

- Variables CSS dinámicas  
- Clase global `.light-theme`  
- Persistencia estética coherente  
- Ajustes automáticos de contraste  
- Efectos visuales adaptados a cada modo

También se integran ajustes inteligentes por sección:

### ✔ Hero  
Brillo y blur ajustados según scroll + corrección especial para light mode.

### ✔ About  
Parallax controlado, overlay técnico y lectura perfecta sin perder estética.

### ✔ Footer  
Cambio automático de contraste e iconos legibles en ambos modos.

---

# 🏁 Avance Actual del Proyecto

## ✔ Navbar Profesional F1-Style

- Diseño translucido + glassmorphism  
- Menú móvil tipo drawer con overlay  
- Toggle de modo claro/oscuro  
- Logo navegable hacia el Hero  
- Animación al hacer scroll (shrink + shadow técnica)

---

## ✔ Hero Cinematográfico con Interacción Realista

- Imagen full-width optimizada  
- Parallax inteligente (desktop) y centrado estable (mobile)  
- Blur + brillo dinámico según scroll  
- Overlay adaptable a light/dark mode  
- Títulos con **efecto glow reactivo al mouse**  
- Animaciones de entrada para copy + botones  

---

## ✔ Sección About — Ficha Técnica

- Fondo técnico con parallax suave  
- Overlay inteligente para mejorar contraste  
- Tarjetas tipo panel de ingeniería  
- Animaciones por delay + scroll reveal  
- Fotografía con borde cyan y glow técnico  
- Estética alineada a dashboards de telemetría

---

## ✔ Footer Moderno

- Línea superior estilo Williams  
- Íconos interactivos de redes  
- Soporte light/dark mode  
- Botón "Back to Top" animado  
- Diseño minimalista y coherente

---

# 🧱 Arquitectura del Proyecto

```bash
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

    🔜 Animaciones Globales
    Microinteracciones F1-style con Framer Motion.

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
