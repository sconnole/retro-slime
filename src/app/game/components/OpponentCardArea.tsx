// src/app/game/components/OpponentCard.tsx
'use client';

import { motion } from 'framer-motion';
import { OpponentCard } from '../types';


export default function OpponentCardArea({
  name,
  imageUrl,
  defense,
  effect,
  description,
}: OpponentCard) {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-4 w-64 text-center border border-gray-200 dark:border-gray-700"
    > 
    <div className="flex justify-center items-center gap-1 text-red-500 font-semibold text-sm mb-1">
        <span>❤️</span>
        <span>{defense}</span>
    </div>

    <span className="text-gray-400 dark:text-gray-600">|</span>

    <h2 className="text-xl font-bold mb-2 text-indigo-700 dark:text-indigo-300">{name}</h2>

    <img
        src={imageUrl}
        alt={name}
        className="w-full h-36 object-cover rounded-md mb-3 border border-gray-300 dark:border-gray-600"
    />

      
    <p className="text-sm italic text-yellow-600 dark:text-yellow-400 mb-2">
        Effect: {effect}
    </p>

    <p className="text-xs text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
}
