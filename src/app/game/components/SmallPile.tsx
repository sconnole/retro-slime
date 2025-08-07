type SmallPileProps = {
  value: number;
  imageSrc?: string;
  alt?: string;
};

export default function SmallPile({
  value,
  imageSrc = './game-assets/discard-back-alternate.png',
  alt = 'Pile',
}: SmallPileProps) {
  return (
    <div className="relative h-20 w-20 rounded border bg-gray-200 dark:bg-gray-700">
      <img
        src={imageSrc}
        alt={alt}
        className="absolute inset-0 h-full w-full rounded object-cover"
      />
      <div className="absolute right-1 bottom-1 rounded bg-black/70 px-1 text-sm font-bold text-white">
        {value}
      </div>
    </div>
  );
}
