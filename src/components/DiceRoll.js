import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rollDice, movePlayer, nextTurn } from '../gameSlice';

const DiceRoll = () => {
  const dispatch = useDispatch();
  const currentPlayer = useSelector((state) => state.game.currentPlayer);
  const diceRoll = useSelector((state) => state.game.diceRoll);
  const players = useSelector((state) => state.game.players);
  const [rolling, setRolling] = useState(false);

  const handleDiceRoll = () => {
    setRolling(true);
    setTimeout(() => {
      const roll = Math.floor(Math.random() * 6) + 1;
      dispatch(rollDice(roll));
      dispatch(movePlayer(roll));
      dispatch(nextTurn());
      setRolling(false);
    }, 600); 
  };

  // auto-roll for computer
  useEffect(() => {
    if (players[currentPlayer].isComputer && !rolling) {
      setTimeout(() => {
        handleDiceRoll();
      }, 1000);
    }
  }, [currentPlayer, players, rolling]);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 border border-cyan-200 flex items-center justify-center text-2xl mb-4">
        {rolling ? '...' : diceRoll || '-'}
      </div>

      {!players[currentPlayer].isComputer && (
        <button
          onClick={handleDiceRoll}
          className="px-4 py-2 bg-cyan-400 text-gray-900 font-bold rounded"
          disabled={rolling}
        >
          {rolling ? 'Rolling...' : 'Roll Dice'}
        </button>
      )}

      <div className="mt-4 text-cyan-300">
        Current Player: {players[currentPlayer].name}
      </div>
    </div>
  );
};

export default DiceRoll;
