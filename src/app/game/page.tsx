'use client';

import { GameContextProvider } from './context/GameContext';
import GameRoot from './components/GameRoot';

export default function GamePage() {
  return (
    <GameContextProvider>
      <GameRoot />
    </GameContextProvider>
  );
}
