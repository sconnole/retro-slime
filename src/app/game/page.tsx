'use client';

import GameOverScreen from './components/GameOverScreen';
import GamePlayScreen from './components/GamePlayScreen';
import { useGameEngine } from './hooks/useGameEngine';

export default function GamePage() {
  const {
    deck,
    discard,
    drawn,
    opponents,
    currentOpponent,
    statusMessage,
    isGameOver,
    drawCards,
    resetGame,
  } = useGameEngine();

  return (
    <main className="flex justify-center p-6">
      {!isGameOver && currentOpponent ? (
        <GamePlayScreen
          currentOpponent={currentOpponent}
          drawn={drawn}
          deck={deck}
          discard={discard}
          onDraw={drawCards}
          statusMessage={statusMessage}
        />
      ) : (
        <GameOverScreen
          won={opponents.length === 0}
          statusMessage={statusMessage}
          onRestart={resetGame}
        />
      )}
    </main>
  );
}
