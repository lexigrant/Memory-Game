import "../App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./Context";

export default function Game() {
    const [gameDifficulty, setGameDifficulty] = useState("easy");

    //card pairs increase with difficulty
    const changeDifficulty = (gameDifficulty) => {
        let cardPairs = {
            easy: 6,
            medium: 10,
            hard: 14
        };
    };


    return (
        <div>
            <div className="card">
                <text src="" className="card-img-top" alt=""></text>
            </div>
            <button>
                <Link to="/">Exit</Link>
            </button>
        </div>
    );
}