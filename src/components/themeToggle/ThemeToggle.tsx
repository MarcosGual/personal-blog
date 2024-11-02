"use client"
import { useState } from "react";
import styles from "./themeToggle.module.css";
import { DarkSide } from "@theme-toggles/react"

const ThemeToggle: React.FC = () => {
    const [isToggled, setToggle] = useState(false)

    return (<div>
        <DarkSide duration={750} toggled={isToggled} toggle={setToggle} />
    </div>)
}

export default ThemeToggle;