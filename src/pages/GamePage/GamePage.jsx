import React from "react";
import InitiativeList from "../../components/InitiativeList/InitiativeList";
import "./GamePage.scss";
import Game from "../../components/Game/Game";

const GamePage = () => {
  return (
    <div className="game__page">
      <div className="game__heading">
        <div>
          <h1>Blue Bells Game</h1>
        </div>
        <div>
          <h3>
            Play a game to earn blue bells that you can donate to the initiative
            of your choice
          </h3>
        </div>
        <div>
          <Game />
        </div>
      </div>
      <InitiativeList />
    </div>
  );
};

export default GamePage;
