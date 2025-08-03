'use client';

type Props = {
  onDraw: (count: number) => void;
  deckLength: number;
};

export default function DrawControls({ onDraw, deckLength }: Props) {
  return (
    <div className="flex justify-center gap-3">
      {[1, 2, 3].map((n) => (
        <button
          key={n}
          onClick={() => onDraw(n)}
          disabled={deckLength < n}
          className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
            deckLength >= n ? 'bg-green-600 hover:bg-green-700' : 'cursor-not-allowed bg-gray-700'
          } `}
        >
          Draw {n}
        </button>
      ))}
    </div>
  );
}
