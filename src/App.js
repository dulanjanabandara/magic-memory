import { useState } from "react";

import "./App.css";

const cardImages = [
  { src: "/img/helmet-1.png" },
  { src: "/img/helmet-1.png" },
  { src: "potion-1.png" },
  { src: "/img/helmet-1.png" },
  { src: "ring-1.png" },
  { src: "scroll-1.png" },
  { src: "shield-1.png" },
  { src: "sword-1.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // shuffleCards() functions does three things
  // duplicate each card once
  // randomize the order of the card using sort method
  // apply a random id to each of the 12 cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App;
