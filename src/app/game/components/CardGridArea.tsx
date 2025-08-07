'use client';

import { useGame } from '../context/GameContext';
import Card from './Card';

export default function CardGridArea() {
  const { activeCards } = useGame();

  // TODO Create GridOutline component
  // if (ActiveCards.length < 1) return GridOutline;

  return (
    <>
      <div className="grid max-h-80 min-h-80 w-full grid-cols-2 justify-items-center gap-4 overflow-scroll">
        {activeCards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </>
  );
}
