'use client'

import { useThemeContext } from "@/hooks/useThemeContext"
import { ChildrenProps } from "@/types/react";
import { useEffect, useState } from "react";

const ThemeProvider: React.FC<ChildrenProps> = ({ children }: ChildrenProps) => {
    const { darkThemeOn } = useThemeContext();
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    if (mounted)
        return <div className={darkThemeOn ? 'dark' : 'light'}>
            {children}
        </div>
}

export default ThemeProvider;