"use client"
import { useContext } from "react";
import { Sun, Moon } from "lucide-react";
// import styles from "./themeToggle.module.css";
// import { DarkSide } from "@theme-toggles/react";
import { ThemeContext } from "@/context/ThemeContext";
import { useThemeContext } from "@/hooks/useThemeContext";

const ThemeToggle: React.FC = () => {
    const { darkThemeOn, toggle } = useThemeContext();

    return (<div>
        {/* <DarkSide duration={750} toggled={!darkThemeOn} toggle={toggle} /> */}
        <button onClick={() => toggle(darkThemeOn? false : true)}>
      {darkThemeOn ? <Sun size={24} /> : <Moon size={24} />}
    </button>
    </div>)
}

export default ThemeToggle;