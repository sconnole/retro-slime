import OpponentCardArea from './OpponentCardArea';
import PlayerArea from './PlayerArea';

export default function GamePlayScreen() {
  return (
    <div className="w-full max-w-sm space-y-6">
      <OpponentCardArea />
      <PlayerArea />
    </div>
  );
}
