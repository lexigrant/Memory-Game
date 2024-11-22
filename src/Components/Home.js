import "../App.css";
import React, { useState, useContext } from "react";
import { ThemeContext } from "./Context"


export default function Home() {

    const halloweenTheme = ["🎃", "👻", "💀", "🧝🏼‍♀️", "🧛🏽‍♀️", "🧟", "🧜🏽‍♀️", "🧞‍♂️", "🧚🏽", "🔪", "👹", "🤡", "🦸🏼‍♂️", "🧙🏼‍♀️"];
    const fruitTheme = ["🍏", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🫐", "🍒", "🍑", "🥥", "🍍", "🍎", "🥝"];

    const { theme, setTheme } = useContext(ThemeContext);

    // change background and card emojis
    const changeTheme = () => {
       
    };


    return (
        <div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Pick a Theme</button>
                <ul className="dropdown-menu">
                    <li className="dropdown-item">Halloween</li>
                    <li className="dropdown-item">Fruits</li>
                </ul>
            </div>
            <button>Play Game</button>
        </div>
    );
}