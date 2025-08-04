'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CardProps } from '@/app/game/types';
import Card from './Card';

export default function CardStack({ cards }: { cards: CardProps[] }) {
  return (
    <div className="flex justify-center gap-2">
      <AnimatePresence>
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              duration: 0.3,
              delay: index * 0.3,
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
