import React from "react";
const Game = () => {
  return (
    <>
      <div className="container">
        <div className="game">
          <div className="game-board">
            <div className="board-row">
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
            </div>
            <div className="board-row">
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
            </div>
            <div className="board-row">
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Game;
