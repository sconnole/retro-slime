'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CardProps } from '@/app/game/types';
import Card from './Card';
import { useGame } from '../context/GameContext';

export default function CardStack({ cards }: { cards: CardProps[] }) {
  const [peekedCardId, setPeekedCardId] = useState<string | null>(null);
  const [hasCompleted, setHasCompleted] = useState(false);

  const { currentOpponent, setPlayerWon } = useGame();

  useEffect(() => {
    if (hasCompleted && currentOpponent) {
      const totalPower = cards.reduce((sum, card) => sum + card.power, 0);
      setPlayerWon(totalPower > currentOpponent.power);
    }
  }, [hasCompleted, cards, currentOpponent, setPlayerWon]);

  return (
    <div className="relative flex h-96 w-auto justify-center gap-2">
      <AnimatePresence>
        {cards.map((card, index) => {
          const isPeeked = peekedCardId === card.id;

          return (
            <motion.div
              key={card.id}
              className="absolute w-full max-w-80 transition-all duration-300 ease-in-out"
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
              onAnimationComplete={() => {
                if (index === cards.length - 1) {
                  setHasCompleted(true);
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
