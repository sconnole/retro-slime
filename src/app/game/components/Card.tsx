'use client';

import { CardProps } from '../types';

export default function Card({ power, name, imageUrl, effect, description }: CardProps) {
  return (
    <div className="relative h-64 max-h-64 w-64 max-w-64 overflow-hidden rounded-lg border-[3px] border-yellow-400 bg-gradient-to-br from-yellow-100 to-yellow-200 shadow-[0_0_10px_rgba(0,0,0,0.3)] dark:border-yellow-600 dark:from-gray-800 dark:to-gray-900">
      <img src={imageUrl} alt={name} className="absolute inset-0 h-full w-full object-cover" />

      <div className="absolute top-0 right-0 left-0 flex justify-between bg-black/60 px-2 py-1 text-sm font-bold text-white">
        <span className="truncate">{name}</span>
        <span className="inline-block rounded bg-red-500 px-1 text-sm font-bold text-white shadow">
          {power}
        </span>
      </div>

      <div className="absolute right-0 bottom-0 left-0 bg-black/60 px-2 py-2 text-xs text-yellow-100">
        <p className="bold text-sm">{effect}</p>
        <p className="text-gray-200 italic">{description}</p>
      </div>
    </div>
  );
}
