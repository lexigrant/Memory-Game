import "../App.css";
import React, { useState, useContext } from "react";
import { ThemeContext } from "./Context"
import { Link } from "react-router-dom";


export default function Home() {

    

    const { setTheme } = useContext(ThemeContext);

    const changeTheme = (x) => {
        setTheme(x)
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
                    {/* <p>{JSON.stringify(icons)}</p> */}
                </div>
            </div>
            <button>
                <Link to="/game">Play Game</Link>
            </button>
        </div>
    );
}