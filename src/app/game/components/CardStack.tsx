'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CardProps } from '@/app/game/types';
import Card from './Card';

export default function CardStack({ cards }: { cards: CardProps[] }) {
  return (
    <div className="relative flex h-96 w-auto justify-center gap-2">
      <AnimatePresence>
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="absolute right-0 left-0 mx-auto w-64"
            style={{ top: `${index * 40}px`, zIndex: cards.length + index }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 1,
            }}
          >
            <Card
              power={card.power}
              name={card.name}
              imageUrl={card.imageUrl}
              effect={card.effect}
              description={card.description}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
