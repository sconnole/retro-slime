import CardStack from './CardStack';
import DrawControls from './DrawControls';
import { useGame } from '../context/GameContext';

export default function PlayerArea() {
  const { activeCards } = useGame();

  return (
    <>
      <CardStack cards={activeCards} />
      <DrawControls />
    </>
  );
}
