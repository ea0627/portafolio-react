import { useState, useEffect } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

const ThemeToggle = () => {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        if (theme === "light") {
            document.documentElement.classList.add("light-theme");
        } else {
            document.documentElement.classList.remove("light-theme");
        }
    }, [theme]);

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            style={{
                background: "var(--secondary-color)",
                color: "var(--accent-color)",
                border: "none",
                padding: "10px 14px",
                borderRadius: "8px",
                cursor: "pointer",
                position: "fixed",
                top: "20px",
                right: "20px",
                zIndex: 999,
                transition: "0.3s ease",
            }}
        >
        {theme === "light" ? <BsMoon size={20} /> : <BsSun size={20} />}
        </button>
    );
};

export default ThemeToggle;
