import { CardProps } from '../types';
import { Egypt, Slimes } from '../constants';

export const shuffle = <T>(array: T[]): T[] => [...array].sort(() => Math.random() - 0.5);

export const createDeck = (): CardProps[] => {
  return shuffle(Slimes);
};

export const createOpponents = (): CardProps[] => {
  return shuffle(Egypt);
};
