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
    <div className="flex justify-center">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-64 rounded-xl border border-gray-200 bg-white p-4 text-center shadow-xl dark:border-gray-700 dark:bg-gray-900"
      >
        <div className="flex">
          <div className="mb-1 flex items-center justify-center gap-1 text-sm font-semibold text-red-500">
            <span className="px-1">❤️</span>
            <span>{defense}</span>
          </div>

          <span className="px-3 text-gray-400 dark:text-gray-600">|</span>

          <h2 className="mb-2 text-xl font-bold text-indigo-700 dark:text-indigo-300">{name}</h2>
        </div>
        <img
          src={imageUrl}
          alt={name}
          className="mb-3 h-36 w-full rounded-md border border-gray-300 object-cover dark:border-gray-600"
        />

        <p className="mb-2 text-sm text-yellow-600 italic dark:text-yellow-400">{effect}</p>

        <p className="text-xs text-gray-600 dark:text-gray-400">{description}</p>
      </motion.div>
    </div>
  );
}
