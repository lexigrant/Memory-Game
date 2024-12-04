import "../App.css";
import React, { useState, createContext, useMemo } from "react";

export const ThemeContext = createContext([]);



const themeDictionary = {
    halloween: {
        themeClassName: "halloween",
        icons: ["🎃", "👻", "💀", "🧝🏼‍♀️", "🧛🏽‍♀️", "🧟", "🧜🏽‍♀️", "🧞‍♂️", "🧚🏽", "🔪", "👹", "🤡", "🦸🏼‍♂️", "🧙🏼‍♀️"]
    }, fruit: {
        themeClassName: "fruit",
        icons: ["🍏", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🫐", "🍒", "🍑", "🥥", "🍍", "🍎", "🥝"]
    }

}

export function ThemeArrayProvider({ children }) {
    const [theme, setTheme] = useState("halloween");
    const [gameDifficulty, setGameDifficulty] = useState("easy");


    const ctx = useMemo(() => {
        const { themeClassName, icons } = themeDictionary[theme] ?? {}
        return {
            theme,
            themeClassName,
            icons,
            setTheme,
            gameDifficulty,
            setGameDifficulty
        }

    }, [theme, setTheme, gameDifficulty, setGameDifficulty])


    return (
        <ThemeContext.Provider value={ctx}>
            {children}
        </ThemeContext.Provider>
    );
}
