import { createContext, useContext } from 'react';
import { useGameEngine } from '../hooks/useGameEngine';

const GameContext = createContext<ReturnType<typeof useGameEngine> | null>(null);

export const GameContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const game = useGameEngine();

  return <GameContext.Provider value={game}>{children}</GameContext.Provider>;
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame must be used within a GameContextProvider');
  return context;
};
