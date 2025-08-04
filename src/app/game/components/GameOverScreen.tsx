'use client';

import { useGame } from '../context/GameContext';

export default function GameOverScreen() {
  const { playerWon, resetGame } = useGame();

  if (playerWon === null) return null;

  return (
    <div className="mt-20 text-center">
      <h2 className="mb-2 text-2xl font-bold">
        {playerWon ? '🎉 You win!' : '💀 You ran out of cards!'}
      </h2>
      <button
        className="mt-4 rounded bg-indigo-600 px-4 py-2 hover:bg-indigo-700"
        onClick={resetGame}
      >
        Restart Game
      </button>
    </div>
  );
}
