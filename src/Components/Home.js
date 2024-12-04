import "../App.css";
import React, { useState, useContext } from "react";
import { ThemeContext } from "./Context"
import { Link } from "react-router-dom";


export default function Home() {

    

    const { setTheme, setDifficulty } = useContext(ThemeContext);

    const changeTheme = (x) => {
        setTheme(x)
    };

    const changeDifficulty = (x) => {
        setDifficulty(x)
    };



    return (
        <div className="">
            <div>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Pick a Theme</button>
                    <ul className="dropdown-menu">
                        <button onClick={() => changeTheme("halloween")} className="dropdown-item">Halloween</button>
                        <button onClick={() => changeTheme("fruit")} className="dropdown-item">Fruits</button>
                    </ul>
                    <div>
                        <button >Choose difficulty</button>
                    </div>
                </div>
            </div>
            <button>
                <Link to="/game">Play Game</Link>
            </button>
        </div>
    );
}