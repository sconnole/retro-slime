'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CardProps } from '@/app/game/types';
import Card from './Card';
import { useGame } from '../context/GameContext';

export default function CardStack({ cards }: { cards: CardProps[] }) {
  const [peekedCardId, setPeekedCardId] = useState<string | null>(null);

  const { setGameAnimationComplete } = useGame();

  return (
    <div className="relative flex h-96 w-full items-center justify-center">
      <AnimatePresence>
        {cards.map((card, index) => {
          const isPeeked = peekedCardId === card.id;

          return (
            <motion.div
              key={card.id}
              className="absolute left-1/2 w-full max-w-64 -translate-x-1/2 transition-all duration-300 ease-in-out"
              style={{
                top: `${index * 40}px`,
                zIndex: isPeeked ? cards.length + 1 : index,
              }}
              initial={{ opacity: 0, y: 10, scale: 1 }}
              animate={{ opacity: 1, y: 0, scale: isPeeked ? 1.05 : 1 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{
                duration: 0.5,
                delay: index * 0.3,
              }}
              onMouseEnter={() => setPeekedCardId(card.id)}
              onMouseLeave={() => setPeekedCardId(null)}
              onTouchStart={() => setPeekedCardId(card.id)}
              onTouchEnd={() => setPeekedCardId(null)}
              onAnimationComplete={() => {
                if (index === cards.length - 1) {
                  setGameAnimationComplete(true);
                }
              }}
            >
              <Card {...card} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
