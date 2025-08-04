// src/app/game/utils/gameHelpers.ts
import { v4 as uuidv4 } from 'uuid';
import { CardProps } from '../types';
import { Egypt } from '../constants';

export const shuffle = <T>(array: T[]): T[] => [...array].sort(() => Math.random() - 0.5);

export const createDeck = (): CardProps[] => {
  const deck: CardProps[] = [];
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

export const createOpponents = (): CardProps[] => {
  return shuffle(Egypt);
};
