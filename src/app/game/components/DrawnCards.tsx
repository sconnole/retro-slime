'use client';

import { CardProps } from '../types';

type Props = {
  cards: CardProps[];
};

export default function DrawnCards({ cards }: Props) {
  return (
    <div className="flex justify-center gap-3">
      {cards.map((card) => (
        <div
          key={card.id}
          className="flex h-20 w-14 items-center justify-center rounded-lg bg-blue-600 text-2xl font-bold shadow-md"
        >
          {card.power}
        </div>
      ))}
    </div>
  );
}
