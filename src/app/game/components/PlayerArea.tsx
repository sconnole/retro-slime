import CardStack from './CardStack';
import DrawControls from './DrawControls';
import { PlayerAreaProps } from '../types';

export default function PlayerArea({ activeCards, deck, onDraw, discard }: PlayerAreaProps) {
  return (
    <>
      <CardStack cards={activeCards} />
      <DrawControls onDraw={onDraw} deckLength={deck.length} />
    </>
  );
}
