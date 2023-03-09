import {WINNER_COMBOS} from "../constants.js";

export const checkWinnerFrom = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;

    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      console.log(`Combinación ganadora ${combo}`)
      return boardToCheck[a];
    }
  }
  return null;
}