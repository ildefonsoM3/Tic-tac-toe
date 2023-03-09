import {Square} from "./Square.jsx";
import {TURNS} from "../constants.js";

export function NexTurn({turn}) {
  return (
    <section className="turn">
      <Square turnSelected={turn === TURNS.x ? turn : ''}>
        {TURNS.x}
      </Square>
      <Square turnSelected={turn === TURNS.o ? turn : ''}>
        {TURNS.o}
      </Square>
    </section>)
}