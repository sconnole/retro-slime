import OpponentCardArea from './OpponentCardArea';
import StatusMessage from './StatusMessage';
import { CardProps } from '../types';
import PlayerArea from './PlayerArea';

interface GamePlayScreenProps {
  currentOpponent: CardProps;
  drawn: CardProps[];
  deck: CardProps[];
  discard: CardProps[];
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
      <PlayerArea drawn={drawn} onDraw={onDraw} deck={deck} discard={discard} />
      <StatusMessage message={statusMessage} />
    </div>
  );
}
