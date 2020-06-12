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
    return squares.join("") === 9;
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

  const buildSquare = (index) => {
    return (
      <Square
        marker={squares[index]}
        squareId={index}
        handleClick={() => {
          handleClick(index);
        }}
      />
    );
  };

  return (
    <>
      <div className="container">
        <div className="game">
          <div className="game-board">
            <div className="board-row">
              {buildSquare(0)}
              {buildSquare(1)}
              {buildSquare(2)}
            </div>
            <div className="board-row">
              {buildSquare(3)}
              {buildSquare(4)}
              {buildSquare(5)}
            </div>
            <div className="board-row">
              {buildSquare(6)}
              {buildSquare(7)}
              {buildSquare(8)}
            </div>
            <div className="game-info">{getStatus()}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Game;
