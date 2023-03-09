import {TURNS} from "../constants.js";

export const Square = ({children, turnSelected, updateBoard, index}) => {
  const color = () => {
    if (turnSelected === TURNS.x) return 'is-selected-red';
    if (turnSelected === TURNS.o) return 'is-selected-green';
    return '';
  }
  const className = `square ${color()}`;
  const handleClick = () => {
    updateBoard(index);
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}