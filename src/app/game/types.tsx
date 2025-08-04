export type CardProps = {
  id: string;
  power: number;
  effect: string;
  description: string;
  imageUrl: string;
  name: string;
};

export interface PlayerAreaProps {
  activeCards: CardProps[];
  deck: CardProps[];
  discard: CardProps[];
  onDraw: (count: number) => void;
}

export interface GamePlayScreenProps extends PlayerAreaProps {
  currentOpponent: CardProps;
}
