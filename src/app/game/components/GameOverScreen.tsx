interface GameOverScreenProps {
  won: boolean;
  onRestart: () => void;
}

export default function GameOverScreen({ won, onRestart }: GameOverScreenProps) {
  return (
    <div className="mt-20 text-center">
      <h2 className="mb-2 text-2xl font-bold">
        {won ? '🎉 You win!' : '💀 You ran out of cards!'}
      </h2>
      <button
        className="mt-4 rounded bg-indigo-600 px-4 py-2 hover:bg-indigo-700"
        onClick={onRestart}
      >
        Restart Game
      </button>
    </div>
  );
}
