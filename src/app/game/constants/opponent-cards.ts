import { CardProps } from '../types';
import { v4 as uuidv4 } from 'uuid';

export const Egypt: CardProps[] = [
  {
    id: uuidv4(),
    power: 3,
    effect: "It's a brick wall... no effect",
    description: 'why is this here?',
    imageUrl: './game-assets/opponents/mud-brick-wall.png',
    name: 'Mud brick wall',
  },
  {
    id: uuidv4(),
    power: 12,
    effect: 'Drain',
    description: 'I have an affinity for the color yellow',
    imageUrl: './game-assets/opponents/the-pyramids.png',
    name: 'The Great Pyramids',
  },
  {
    id: uuidv4(),
    power: 9,
    effect: 'Reclaim',
    description: 'a long time ago we ruled the world',
    imageUrl: './game-assets/opponents/obelisk.png',
    name: 'Obelisk',
  },
  {
    id: uuidv4(),
    power: 15,
    effect: 'Destroy',
    description: 'Sand is my friend',
    imageUrl: './game-assets/opponents/the-great-sahara.png',
    name: 'The Great Sahara',
  },

  {
    id: uuidv4(),
    power: 0,
    effect: 'Drain',
    description: 'Wind blows hard around these parts',
    imageUrl: './game-assets/opponents/sudden-simoom.png',
    name: 'Sudden Simoom',
  },
];
