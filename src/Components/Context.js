import "../App.css";
import React, { useState, createContext } from "react";

export const ThemeContext = createContext([]);

export function ThemeArrayProvider({ children }) {
    const [theme, setTheme] = useState([]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
