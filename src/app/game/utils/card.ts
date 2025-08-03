// src/app/game/utils/gameHelpers.ts
import { v4 as uuidv4 } from 'uuid';
import { PlayerCard, OpponentCard } from '../types';

export const shuffle = <T>(array: T[]): T[] => [...array].sort(() => Math.random() - 0.5);

export const createDeck = (): PlayerCard[] => {
  const deck: PlayerCard[] = [];
  for (let i = 0; i < 20; i++) {
    deck.push({
      id: uuidv4(),
      power: Math.floor(Math.random() * 7) + 1,
      name: 'A cool card',
      description: 'There after me lucky charms',
      effect: '',
      imageUrl: '',
    });
  }
  return shuffle(deck);
};

export const createOpponents = (): OpponentCard[] => {
  return [8, 10, 12, 14, 16].map((defense) => ({
    name: 'Mud Brick Wall',
    imageUrl: './game-assets/opponents/mud-brick-wall.png',
    effect: 'not too much',
    description: "it's a wall",
    id: uuidv4(),
    defense,
  }));
};
