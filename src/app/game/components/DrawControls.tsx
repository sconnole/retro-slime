'use client';

import { useGame } from '../context/GameContext';

export default function DrawControls() {
  const { drawCards, deck } = useGame();

  return (
    <div className="flex justify-center gap-3">
      {[1, 2, 3].map((n) => (
        <button
          key={n}
          onClick={() => drawCards(n)}
          disabled={deck.length < n}
          className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
            deck.length >= n ? 'bg-green-600 hover:bg-green-700' : 'cursor-not-allowed bg-gray-700'
          } `}
        >
          Draw {n}
        </button>
      ))}
    </div>
  );
}
