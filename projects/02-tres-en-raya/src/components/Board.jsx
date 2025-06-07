import { Square } from "./Square";
import { Circle } from "lucide-react";
import { X } from "lucide-react";
export function BoardComponent({ board, resetGame, updateBoard, turn, TURNS }) {
  return (
    <main className="board">
      <h1>Tres en raya</h1>
      <button onClick={resetGame}>Reiniciar</button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          <X size={50} />
        </Square>
        <Square isSelected={turn === TURNS.O}>
          <Circle size={50} />
        </Square>
      </section>
    </main>
  );
}
