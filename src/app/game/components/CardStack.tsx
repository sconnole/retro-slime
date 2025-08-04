'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CardProps } from '@/app/game/types';
import Card from './Card';

export default function CardStack({ cards }: { cards: CardProps[] }) {
  const [peekedCardId, setPeekedCardId] = useState<string | null>(null);

  return (
    <div className="relative flex h-96 w-auto justify-center gap-2">
      <AnimatePresence>
        {cards.map((card, index) => {
          const isPeeked = peekedCardId === card.id;

          return (
            <motion.div
              key={card.id}
              className={`absolute w-full max-w-80 transition-all duration-300 ease-in-out`}
              style={{
                top: `${index * 40}px`,
                zIndex: isPeeked ? cards.length + 1 : index,
              }}
              initial={{ scale: 1 }}
              animate={{ scale: isPeeked ? 1.05 : 1 }}
              onMouseEnter={() => setPeekedCardId(card.id)}
              onMouseLeave={() => setPeekedCardId(null)}
              onTouchStart={() => setPeekedCardId(card.id)}
              onTouchEnd={() => setPeekedCardId(null)}
            >
              <Card
                id={card.id}
                power={card.power}
                name={card.name}
                imageUrl={card.imageUrl}
                effect={card.effect}
                description={card.description}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
