'use client';

import "@/styles/theme.css";
import { useEffect,useState } from "react";

export default function ThemeToggle(){
    const [theme, setTheme] = useState("light");

    useEffect(()=>{
        const savedTheme = localStorage.getItem("theme")||"light";
        setTheme(savedTheme);
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(savedTheme);

    }, []);
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark": "light";
        setTheme(newTheme);
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(newTheme);
        localStorage.setItem("theme", newTheme);
    };
    return(
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? "🌙" : "☀️"}
    </button>
    )
}