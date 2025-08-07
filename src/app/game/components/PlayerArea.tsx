import DrawControls from './DrawControls';
import { useGame } from '../context/GameContext';
import DrawArea from './DrawArea';
import CardGridArea from './CardGridArea';

export default function PlayerArea() {
  const { deck, discard } = useGame();

  return (
    <>
      <div className="flex w-full">
        <DrawArea draw={deck} discard={discard} />
        <div className="flex w-3/4 items-center justify-center p-2">
          <CardGridArea />
        </div>
      </div>
      <DrawControls />
    </>
  );
}
