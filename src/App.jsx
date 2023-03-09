import { useState } from "react"
import { TURNS } from "./constants.js";
import { checkWinnerFrom } from "./logic/board.js";
import { checkEndGame, WinnerModal } from "./components/WinnerModal.jsx";
import { BoardSquare } from "./components/BoardSquare.jsx";
import { NexTurn } from "./components/NexTurn.jsx";
import { saveGameStorage, resetGameStorage } from "./logic/storage/index.js";
import confeti from "canvas-confetti"
import './App.css'

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromLocalStorage = window.localStorage.getItem('board');
    return boardFromLocalStorage
      ? JSON.parse(boardFromLocalStorage)
      : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromLocalStorage = window.localStorage.getItem('turn');
    return turnFromLocalStorage ?? TURNS.x;
  });
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.x);
    setWinner(null);

    resetGameStorage();
  }

  const updateBoard = (index) => {
    //Prevent to overwritten
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
    setTurn(newTurn);

    saveGameStorage({board: newBoard, turn: newTurn});

    const newWinner = checkWinnerFrom(newBoard);

    if (newWinner) {
      confeti();
      setWinner(newWinner);

    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>

      <BoardSquare board={board} updateBoard={updateBoard}/>
      <NexTurn turn={turn}/>
      <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  )
}

export default App