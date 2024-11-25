import React, { useState, useContext } from "react";
import { ThemeContext } from "./Components/Context"

export default function Background({children}) {
    const { themeClassName } = useContext(ThemeContext);
    return (
        <div className={themeClassName ? themeClassName : "App"}>
            {children}
        </div>
    )
}