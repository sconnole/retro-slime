import OpponentCardArea from './OpponentCardArea';
import CardStack from './CardStack';
import DrawControls from './DrawControls';
import DeckStatus from './DeckStatus';
import StatusMessage from './StatusMessage';
import { PlayerCard, OpponentCard } from '../types';

interface GamePlayScreenProps {
  currentOpponent: OpponentCard;
  drawn: PlayerCard[];
  deck: PlayerCard[];
  discard: PlayerCard[];
  onDraw: (count: number) => void;
  statusMessage: string;
}

export default function GamePlayScreen({
  currentOpponent,
  drawn,
  deck,
  discard,
  onDraw,
  statusMessage,
}: GamePlayScreenProps) {
  return (
    <div className="w-full max-w-sm space-y-6">
      <OpponentCardArea {...currentOpponent} />
      <CardStack cards={drawn} />
      <DrawControls onDraw={onDraw} deckLength={deck.length} />
      <DeckStatus deckCount={deck.length} discardCount={discard.length} />
      <StatusMessage message={statusMessage} />
    </div>
  );
}
