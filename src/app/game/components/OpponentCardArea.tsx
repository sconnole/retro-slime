'use client';

import { useGame } from '../context/GameContext';
import Card from './Card';

export default function OpponentCardArea() {
  const { currentOpponent } = useGame();

  if (!currentOpponent) return null;

  const { id, name, imageUrl, power, effect, description } = currentOpponent;

  return (
    <div className="flex justify-center">
      <Card
        id={id}
        power={power}
        name={name}
        imageUrl={imageUrl}
        effect={effect}
        description={description}
      />
    </div>
  );
}
