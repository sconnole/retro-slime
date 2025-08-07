'use client';

import SmallPile from './SmallPile';
import { CardProps } from '../types';

export default function DrawArea({ draw, discard }: { draw: CardProps[]; discard: CardProps[] }) {
  return (
    <div className="flex w-1/4 flex-col items-center justify-start space-y-4 p-2">
      <SmallPile value={draw.length} alt="Draw pile" imageSrc="./game-assets/card-back.png" />
      <SmallPile value={discard.length} alt="Discard pile" />
    </div>
  );
}
