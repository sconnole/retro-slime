'use client';

import { CardProps } from '../types';
import Card from './Card';

export default function OpponentCardArea({
  name,
  imageUrl,
  power,
  effect,
  description,
}: CardProps) {
  return (
    <div className="flex justify-center">
      <Card
        power={power}
        name={name}
        imageUrl={imageUrl}
        effect={effect}
        description={description}
      />
    </div>
  );
}
