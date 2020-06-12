import React, { useState } from "react";
import Square from "./Square";
const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIxNext] = useState(true);

  const changeTurn = () => {
    setIxNext(!isXNext);
  };

  const calculateWinner = (squares) => {
    const possibleLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // go over all possibly winning lines and check if they consist of only X's/only O's
    for (let i = 0; i < possibleLines.length; i++) {
      const [a, b, c] = possibleLines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const getStatus = () => {
    if (calculateWinner(squares)) {
      return "Winner: " + calculateWinner(squares);
    } else if (isBoardFull(squares)) {
      return "Draw!";
    } else {
      const player = isXNext ? "X" : "O";
      return "Next player: " + player;
    }
  };

  const isBoardFull = (squares) => {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] == null) {
        return false;
      }
    }
    return true;
  };

  const handleClick = (squareIndex) => {
    if (squares[squareIndex] !== null || calculateWinner(squares) !== null) {
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
              <Square
                marker={squares[0]}
                squareId={0}
                handleClick={() => {
                  handleClick(0);
                }}
              />
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
            <div className="game-info">{getStatus()}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Game;
