import OpponentCardArea from './OpponentCardArea';
import StatusMessage from './StatusMessage';
import { GamePlayScreenProps } from '../types';
import PlayerArea from './PlayerArea';

export default function GamePlayScreen({
  currentOpponent,
  activeCards,
  deck,
  discard,
  onDraw,
}: GamePlayScreenProps) {
  return (
    <div className="w-full max-w-sm space-y-6">
      <OpponentCardArea {...currentOpponent} />
      <PlayerArea activeCards={activeCards} onDraw={onDraw} deck={deck} discard={discard} />
    </div>
  );
}
