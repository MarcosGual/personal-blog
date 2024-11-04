'use client'

import { getFromLocalStorage } from "@/context/ThemeContext";
import { useThemeContext } from "@/hooks/useThemeContext"
import { ChildrenProps } from "@/types/react";
import { useEffect } from "react";

const ThemeProvider: React.FC<ChildrenProps> = ({ children }: ChildrenProps) => {
    const { darkThemeOn, setDarkThemeOn } = useThemeContext();

    useEffect(() => {
        const savedThemeConfig = getFromLocalStorage();
        if (savedThemeConfig !== null) {
            setDarkThemeOn(savedThemeConfig);
        }
    }, [])

    return <div className={darkThemeOn ? 'dark' : 'light'}>
        {children}
    </div>
}

export default ThemeProvider;