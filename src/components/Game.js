import React, { useState } from "react";
const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIxNext] = useState(true);

  const handleClick = (squareIndex) => {
    console.log(squareIndex, squares);
  };

  return (
    <>
      <div className="container">
        <div className="game">
          <div className="game-board">
            <div className="board-row">
              <div
                onClick={() => {
                  handleClick(0);
                }}
                className="square"
              >
                {squares[0]}
              </div>
              <div
                onClick={() => {
                  handleClick(1);
                }}
                className="square"
              >
                {squares[1]}
              </div>
              <div
                onClick={() => {
                  handleClick(2);
                }}
                className="square"
              >
                {squares[2]}
              </div>
            </div>
            <div className="board-row">
              <div className="square">{squares[3]}</div>
              <div className="square">{squares[4]}</div>
              <div className="square">{squares[5]}</div>
            </div>
            <div className="board-row">
              <div className="square">{squares[6]}</div>
              <div className="square">{squares[7]}</div>
              <div className="square">{squares[8]}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Game;
