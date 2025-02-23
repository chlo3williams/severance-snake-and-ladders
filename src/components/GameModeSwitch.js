import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleGameMode } from '../gameSlice';

const GameModeSwitch = () => {
  const dispatch = useDispatch();
  const gameMode = useSelector((state) => state.game.gameMode);

  return (
    <div className="pt-4 pl-4 flex items-center space-x-4">
      <span className="text-cyan-200">Mode:</span>
      <button
        onClick={() => dispatch(toggleGameMode())}
        className="px-4 py-2 bg-cyan-400 text-gray-900 font-bold rounded"
      >
        {gameMode === 'pvp' ? 'Player vs Player' : 'Player vs Computer'}
      </button>
    </div>
  );
};

export default GameModeSwitch;
