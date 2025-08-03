'use client';

type Props = {
  deckCount: number;
  discardCount: number;
};

export default function DeckStatus({ deckCount, discardCount }: Props) {
  return (
    <div className="text-center text-sm text-gray-400">
      Deck: {deckCount} cards | Discarded: {discardCount}
    </div>
  );
}
