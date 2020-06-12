import React, { useState } from "react";
const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIxNext] = useState(true);

  const changeTurn = () => {
    setIxNext(!isXNext);
  };

  const handleClick = (squareIndex) => {
    if (squares[squareIndex] !== null) {
      return;
    }
    console.log(squareIndex, squares);

    // see https://devhints.io/js-array
    const newState = squares.slice();
    newState[squareIndex] = isXNext ? "X" : "O";
    setSquares(newState);
    console.log(newState);
    changeTurn();
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
              <div
                onClick={() => {
                  handleClick(3);
                }}
                className="square"
              >
                {squares[3]}
              </div>
              <div
                onClick={() => {
                  handleClick(4);
                }}
                className="square"
              >
                {squares[4]}
              </div>
              <div
                onClick={() => {
                  handleClick(5);
                }}
                className="square"
              >
                {squares[5]}
              </div>
            </div>
            <div className="board-row">
              <div
                onClick={() => {
                  handleClick(6);
                }}
                className="square"
              >
                {squares[6]}
              </div>
              <div
                onClick={() => {
                  handleClick(7);
                }}
                className="square"
              >
                {squares[7]}
              </div>
              <div
                onClick={() => {
                  handleClick(8);
                }}
                className="square"
              >
                {squares[8]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Game;
