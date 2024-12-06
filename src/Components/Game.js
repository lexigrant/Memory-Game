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
    const [isFlipped, setIsFlipped] = useState([]);

    //card pairs increase with difficulty
    const cards = useMemo(() => {
        const shuffledIcons = shuffle(icons)
        const uniqueCardCount = CARD_PAIRS[gameDifficulty]
        const uniqueIcons = shuffledIcons.slice(0, uniqueCardCount)
        const uniqueCards = uniqueIcons.map((icon, i) => {return {value: icon, id: `${i}-a`}})
        const uniqueCardPairs = uniqueIcons.map((icon, i) => {return {value: icon, id: `${i}-b`}})
        let cardDeck = [...uniqueCards, ...uniqueCardPairs];
        return shuffle(cardDeck);

    }, [icons, gameDifficulty])

    function flipCard(cardId) {
        setIsFlipped((prev) =>
            prev.includes(cardId) ? prev.filter((id) => id !== cardId) : [...prev, cardId]
        );
    }


    return (
        <div>
            <button>
                <Link to="/">Exit</Link>
            </button>
            <div className="card-grid">
                {
                    cards.map(card => {
                        return (
                            <div key={card.id} className={`card ${isFlipped.includes(card.id) ? "flip" : ""}`} onClick={() => flipCard(card.id)}>
                                <div src="" className="front" alt="">{card.value}</div>
                                <div src="" className="back" alt=""></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}