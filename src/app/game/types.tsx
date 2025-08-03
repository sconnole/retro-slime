export type PlayerCard = {
  id: string;
  power: number;
  effect: string;
  description: string;
  imageUrl: string;
  name: string;
};

export type OpponentCard = {
  id: string;
  effect: string;
  description: string;
  imageUrl: string;
  name: string;
  defense: number;
};
