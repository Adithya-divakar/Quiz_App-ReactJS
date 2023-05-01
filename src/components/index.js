import React, { useState } from 'react';
import './index.css'

const TicTacToe = () => {
  const [player, setPlayer] = useState('X');
  const [board, setBoard] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState(null);

  const handleSquareClick = (index) => {

    let newBoard = [...board];
    if (winner || newBoard[index]) {
      return;
    }
    newBoard[index] = player;
    setBoard(newBoard);
    setPlayer(player === 'X' ? 'O' : 'X');
    checkForWinner(newBoard);
  };

  const checkForWinner = (board) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }
  };

  const renderSquare = (index) => {
    return (
      <button className="square btn" onClick={() => handleSquareClick(index)}>
        {board[index]}
      </button>
    );
  };

  const renderStatus = () => {
    if (winner) {
      return `Winner: ${winner}`;
    } else {
      return `Next player: ${player}`;
    }
  };

  const handleRestart = () => {
    setPlayer('X');
    setBoard(Array(9).fill(''));
    setWinner(null);
  };

  return (
    <div className="game container">
      <div className="game-board">
      <h1> Tic Tac Toe</h1>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className="game-info">
        <div>{renderStatus()}</div>
        <button className=' btn btn-restart' onClick={handleRestart}>Restart</button>
      </div>
    </div>
  );
};

export default TicTacToe;
