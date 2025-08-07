'use client';

import { useGame } from '../context/GameContext';
import Card from './Card';
import DrawArea from './DrawArea';

export default function OpponentCardArea() {
  const { currentOpponent, opponents, opponetDiscard } = useGame();

  if (!currentOpponent) return null;

  const { id, name, imageUrl, power, effect, description } = currentOpponent;

  return (
    <div className="flex w-full">
      <DrawArea draw={opponents} discard={opponetDiscard} />

      <div className="flex w-3/4 items-center justify-center p-2">
        <Card
          id={id}
          power={power}
          name={name}
          imageUrl={imageUrl}
          effect={effect}
          description={description}
        />
      </div>
    </div>
  );
}
