"use client"

import React,  { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextInterface {
    mode: string;
    setMode: (mode: string) => void;
}

const ThemeContext = createContext<ThemeContextInterface | undefined>(undefined);

export function ThemeProvider({ children }: any) {

    const [mode, setMode] = useState('');

    useEffect(() => {
        handleThemeChange();
    }, [mode])

    const handleThemeChange = () => {
        if (mode === 'dark') {
            setMode('light');
            document.documentElement.classList.add('light');
        }
        else {
            setMode('dark');
            document.documentElement.classList.add('dark');
        }
    }

    return (
        <ThemeContext.Provider value={{ mode, setMode }}>
            {children}
        </ThemeContext.Provider>
    )

}

export function useTheme() {
    return useContext(ThemeContext);
}