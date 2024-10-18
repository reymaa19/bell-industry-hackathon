import "./Game.scss";
import { useEffect, useState } from "react";
import image1 from "../../images/bell-image1.jpg";
import image2 from "../../images/bell-image2.jpg";
import image3 from "../../images/bell-image3.jpg";
import image4 from "../../images/bell-image4.jpg";
import image5 from "../../images/bell-image5.jpg";
import image6 from "../../images/bell-image6.jpg";
import SingleCard from "../SingleCard/SingleCard";

const cardImages = [
  { src: image1, matched: false },
  { src: image2, matched: false },
  { src: image3, matched: false },
  { src: image4, matched: false },
  { src: image5, matched: false },
  { src: image6, matched: false },
];

function Game() {
  const [cards, setCards] = useState([]);
  const [selectionOne, setSelectionOne] = useState(null);
  const [selectionTwo, setSelectionTwo] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [isWinner, setIsWinner] = useState(false);

  // double the images, shuffle them
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setSelectionOne(null);
    setSelectionTwo(null);
    setCards(shuffledCards);
    setIsWinner(false);
  };

  const selection = (card) => {
    selectionOne ? setSelectionTwo(card) : setSelectionOne(card);
  };

  useEffect(() => {
    if (selectionOne && selectionTwo) {
      setDisabled(true);
      if (selectionOne.src === selectionTwo.src) {
        console.log("cards match");
        setCards((prevCards) => {
          const newCards = prevCards.map((card) => {
            if (card.src === selectionOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
          // Check if all cards are matched
          if (newCards.every((card) => card.matched)) {
            setIsWinner(true);
            setScore((prevScore) => prevScore + 500);
          }
          return newCards;
        });
        setTimeout(() => {
          setSelectionOne(null);
          setSelectionTwo(null);
          setDisabled(false);
        }, 1000);
      } else {
        console.log("does not match");
        setTimeout(() => {
          setSelectionOne(null);
          setSelectionTwo(null);
          setDisabled(false);
        }, 1000);
      }
    }
  }, [selectionOne, selectionTwo]);

  console.log(cards);

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <section className="game">
      <button onClick={shuffleCards} className="game__button">
        New Game
      </button>
      {/* <p>BlueBells: {score}</p> */}
      <section className="game__container">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            data={card}
            selection={selection}
            flipped={
              card === selectionOne ||
              card === selectionTwo ||
              card.matched === true
            }
            disabled={disabled}
          />
        ))}
      </section>
      {isWinner && (
        <h2 className="game__winner">Congrats! You've earned 500 BlueBells!</h2>
      )}
    </section>
  );
}

export default Game;
