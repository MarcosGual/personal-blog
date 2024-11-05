"use client"

import { ChildrenProps } from "@/types/react";
import { createContext, ReactNode, useEffect, useState } from "react";

type ThemeContextType = {
    darkThemeOn: boolean | null,
    toggle: (value: boolean) => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>({
    darkThemeOn: false,
    toggle: () => { }
});

export const getFromLocalStorage = () => {
    if (localStorage) {
        const value = window.localStorage.getItem("darkTheme");
        return value === "true";
    }
    return false;
}

export const ThemeContextProvider = ({ children }: ChildrenProps) => {
    const [darkThemeOn, setDarkThemeOn] = useState<boolean | null>(() => {
        return getFromLocalStorage()||null;
    })

    const toggle = () => {
        setDarkThemeOn(!darkThemeOn);
    }

    useEffect(() => {
        localStorage.setItem("darkTheme", darkThemeOn ? darkThemeOn.toString() : 'false');
    }, [darkThemeOn])

    return <ThemeContext.Provider value={{ darkThemeOn, toggle }}>{children}</ThemeContext.Provider>
}