import "./App.css";
import { useState } from "react";
import { checkWinnerFrom, checkEndGame } from "./board";
import confetti from "canvas-confetti";
import { BoardComponent } from "./components/Board.jsx";
import { WinnerModal } from "./components/WinnerModal.jsx";
import { Circle } from "lucide-react";
import { X } from "lucide-react";

const XIcon = <X size={50} />;
const CircleIcon = <Circle size={50} />;

const TURNS = {
  X: XIcon,
  O: CircleIcon,
};

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);

  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    localStorage.removeItem("board");
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <>
      <BoardComponent
        board={board}
        resetGame={resetGame}
        turn={turn}
        TURNS={TURNS}
        updateBoard={updateBoard}
      ></BoardComponent>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </>
  );
}

export default App;
