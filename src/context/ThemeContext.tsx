"use client"

import { createContext, ReactNode, useState } from "react";

interface ThemeProviderProps {
    children: ReactNode;
}

type ThemeContextType = {
    darkThemeOn: boolean,
    setDarkThemeOn: (value: boolean) => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>({
    darkThemeOn: false,
    setDarkThemeOn: () => {} 
});

const getFromLocalStorage = () => {
    if (typeof window !== undefined && localStorage) {
        const value = Boolean(localStorage.getItem("darkTheme"));
        return value || false;
    } else {
        return false;
    }
}

export const ThemeContextProvider = ({ children }: ThemeProviderProps) => {
    const [darkThemeOn, setDarkThemeOn] = useState<boolean>(() => {
        return getFromLocalStorage();
    });

    return <ThemeContext.Provider value={{ darkThemeOn, setDarkThemeOn }}>{children}</ThemeContext.Provider>
}