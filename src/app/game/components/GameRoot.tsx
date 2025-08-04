'use client';

import { useGame } from '../context/GameContext';
import GameOverScreen from './GameOverScreen';
import GamePlayScreen from './GamePlayScreen';

export default function GameRoot() {
  const { currentOpponent, isGameOver } = useGame();

  return (
    <main className="flex justify-center p-6">
      {!isGameOver && currentOpponent ? <GamePlayScreen /> : <GameOverScreen />}
    </main>
  );
}
