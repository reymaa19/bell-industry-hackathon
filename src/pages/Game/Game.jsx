import React from "react";
import InitiativeList from "../../components/InitiativeList/InitiativeList";
import "./Game.scss";

const GamePage = () => {
  return (
    <div className="game__page">
      <div className="game__heading">
        <h1>Blue Bells Game</h1>
        <h3>
          Play a game to earn blue bells that you can donate to the initiative
          of your choice
        </h3>
      </div>
      <InitiativeList />
    </div>
  );
};

export default GamePage;
