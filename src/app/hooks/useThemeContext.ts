'use client'

import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useThemeContext debe usarse dentro de un ThemeContextProvider");
    }
    return context;
};