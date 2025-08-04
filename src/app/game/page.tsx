'use client';

import GameOverScreen from './components/GameOverScreen';
import GamePlayScreen from './components/GamePlayScreen';
import { useGameEngine } from './hooks/useGameEngine';

export default function GamePage() {
  const {
    deck,
    discard,
    activeCards,
    opponents,
    currentOpponent,
    isGameOver,
    drawCards,
    resetGame,
  } = useGameEngine();

  return (
    <main className="flex justify-center p-6">
      {!isGameOver && currentOpponent ? (
        <GamePlayScreen
          currentOpponent={currentOpponent}
          activeCards={activeCards}
          deck={deck}
          discard={discard}
          onDraw={drawCards}
        />
      ) : (
        <GameOverScreen won={opponents.length === 0} onRestart={resetGame} />
      )}
    </main>
  );
}
