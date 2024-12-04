import "../App.css";
import React, { useState, useEffect, useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./Context";

const CARD_PAIRS = {
    easy: 6,
    medium: 10,
    hard: 14
};

function shuffle(items) {
    const itemsCopy = [...items]
    //Shuffle card deck randomly
    for (let i = itemsCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i + 1);
        [itemsCopy[i], itemsCopy[j]] = [itemsCopy[j], itemsCopy[i]];
    }
    return itemsCopy;
}

export default function Game() {

    const { icons, gameDifficulty } = useContext(ThemeContext);

    //card pairs increase with difficulty
    const cards = useMemo(() => {
        const shuffledIcons = shuffle(icons)
        const uniqueCardCount = CARD_PAIRS[gameDifficulty]
        const uniqueIcons = shuffledIcons.slice(0, uniqueCardCount)
        let cardDeck = [...uniqueIcons, ...uniqueIcons];
        return shuffle(cardDeck);

    }, [icons, gameDifficulty])


    return (
        <div>
            <button>
                <Link to="/">Exit</Link>
            </button>
            {
                cards.map(icon => {
                    return (
                        <div className="card">
                            <div src="" className="card-body" alt="">{icon}</div>
                        </div>
                    )
                })
            }

        </div>
    );
}