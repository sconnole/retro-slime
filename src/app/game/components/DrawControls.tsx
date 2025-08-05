'use client';

import { useGame } from '../context/GameContext';

const slimeSpriteUrl = '/game-assets/slimes/teal-slime.png';

export default function DrawControls() {
  const { drawCards, deck } = useGame();

  return (
    <div className="mt-6 flex justify-center gap-8">
      {[1, 2, 3].map((count) => {
        const isEnabled = deck.length >= count;

        return (
          <div
            key={count}
            onClick={() => isEnabled && drawCards(count)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if ((e.key === 'Enter' || e.key === ' ') && isEnabled) drawCards(count);
            }}
            aria-label={`Draw ${count} slime${count > 1 ? 's' : ''}`}
            className={`relative cursor-pointer rounded-lg transition-transform duration-200 select-none ${isEnabled ? 'hover:scale-110' : 'pointer-events-none cursor-not-allowed opacity-30'} h-12 w-12`}
          >
            {[...Array(count)].map((_, i) => (
              <img
                key={i}
                src={slimeSpriteUrl}
                alt="slime"
                draggable={false}
                className="absolute top-0 left-0 h-12 w-12"
                style={{ left: `${i * 12}px`, zIndex: count - i }}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}
