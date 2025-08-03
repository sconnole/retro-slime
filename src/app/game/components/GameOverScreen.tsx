interface GameOverScreenProps {
  won: boolean;
  statusMessage: string;
  onRestart: () => void;
}

export default function GameOverScreen({ won, statusMessage, onRestart }: GameOverScreenProps) {
  return (
    <div className="text-center mt-20">
      <h2 className="text-2xl font-bold mb-2">
        {won ? '🎉 You win!' : '💀 You ran out of cards!'}
      </h2>
      <p className="text-sm text-gray-400">{statusMessage}</p>
      <button
        className="mt-4 px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700"
        onClick={onRestart}
      >
        Restart Game
      </button>
    </div>
  );
}
