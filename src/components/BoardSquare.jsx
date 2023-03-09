import {Square} from "./Square.jsx";

export function BoardSquare({updateBoard, board}) {
  return (
    <section className="game">
      {
        board.map((val, index) => {
          return (
            <Square
              key={index}
              index={index}
              turnSelected={val}
              updateBoard={updateBoard}
            >
              {val}
            </Square>
          )
        })
      }
    </section>
  )
}
