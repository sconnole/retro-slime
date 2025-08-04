import CardStack from './CardStack';
import DrawControls from './DrawControls';
import DeckStatus from './DeckStatus';
import { CardProps } from '../types';

interface PlayerAreaProps {
  drawn: CardProps[];
  deck: CardProps[];
  discard: CardProps[];
  onDraw: (count: number) => void;
}

export default function PlayerArea({ drawn, deck, onDraw, discard }: PlayerAreaProps) {
  return (
    <>
      <CardStack cards={drawn} />
      <DrawControls onDraw={onDraw} deckLength={deck.length} />
      <DeckStatus deckCount={deck.length} discardCount={discard.length} />
    </>
  );
}
