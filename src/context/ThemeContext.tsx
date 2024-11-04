"use client"

import { ChildrenProps } from "@/types/react";
import { createContext, ReactNode, useState } from "react";

type ThemeContextType = {
    darkThemeOn: boolean,
    setDarkThemeOn: (value: boolean) => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>({
    darkThemeOn: false,
    setDarkThemeOn: () => {} 
});

export const getFromLocalStorage = () => {
    if (typeof window !== undefined) {
        const value = Boolean(window.localStorage.getItem("darkTheme"));
        return value || false;
    } else {
        return false;
    }
}

export const ThemeContextProvider = ({ children }: ChildrenProps) => {
    const [darkThemeOn, setDarkThemeOn] = useState<boolean>(false);

    return <ThemeContext.Provider value={{ darkThemeOn, setDarkThemeOn }}>{children}</ThemeContext.Provider>
}