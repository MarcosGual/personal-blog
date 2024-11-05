"use client"
import { useContext } from "react";
import styles from "./themeToggle.module.css";
import { DarkSide } from "@theme-toggles/react"
import { ThemeContext } from "@/context/ThemeContext";
import { useThemeContext } from "@/hooks/useThemeContext";

const ThemeToggle: React.FC = () => {
    const { darkThemeOn, toggle } = useThemeContext();

    return (<div>
        <DarkSide duration={750} toggled={!darkThemeOn} toggle={toggle} />
    </div>)
}

export default ThemeToggle;