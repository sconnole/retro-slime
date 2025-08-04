'use client';

import { CardProps } from '../types';

export default function Card({ power, name, imageUrl, effect, description }: CardProps) {
  return (
    <div className="border-3 border-gray-200 bg-white p-2 text-center shadow-xl dark:border-gray-700 dark:bg-gray-900">
      <div className="mb-2 flex justify-center border-b border-gray-200 dark:border-gray-700">
        <h3 className="flex items-center justify-center gap-1 text-xl font-semibold text-red-500 dark:text-red-300">
          {power}
        </h3>

        <span className="px-3"></span>

        <h2 className="text-xl font-bold text-indigo-700 dark:text-indigo-300">{name}</h2>
      </div>
      <img src={imageUrl} alt={name} className="mx-auto mb-3 h-48 object-cover" />

      <p className="mb-2 border-t border-gray-200 text-sm text-yellow-600 italic dark:border-gray-700 dark:text-yellow-400">
        {effect}
      </p>

      <p className="text-xs text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}
