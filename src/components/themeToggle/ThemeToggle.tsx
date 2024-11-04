"use client"
import { useContext } from "react";
import styles from "./themeToggle.module.css";
import { DarkSide } from "@theme-toggles/react"
import { ThemeContext } from "@/context/ThemeContext";
import { useThemeContext } from "@/app/hooks/useThemeContext";

const ThemeToggle: React.FC = () => {
    const {darkThemeOn, setDarkThemeOn} = useThemeContext();
    console.log(darkThemeOn);
    

    return (<div>
        <DarkSide duration={750} toggled={darkThemeOn} toggle={setDarkThemeOn} />
    </div>)
}

export default ThemeToggle;