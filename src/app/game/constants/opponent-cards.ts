import { CardProps } from '../types';
import { v4 as uuidv4 } from 'uuid';

export const Egypt: CardProps[] = [
  {
    id: uuidv4(),
    name: 'Mud brick wall',
    power: 3,
    effect: "It's a brick wall... no effect",
    description: 'why is this here?',
    imageUrl: './game-assets/opponents/mud-brick-wall.png',
  },
  {
    id: uuidv4(),
    name: 'The Great Pyramids',
    power: 12,
    effect: 'Drain',
    description: 'I have an affinity for the color yellow',
    imageUrl: './game-assets/opponents/the-pyramids.png',
  },
  {
    id: uuidv4(),
    name: 'Obelisk',
    power: 9,
    effect: 'Reclaim',
    description: 'a long time ago we ruled the world',
    imageUrl: './game-assets/opponents/obelisk.png',
  },
  {
    id: uuidv4(),
    name: 'The Great Sahara',
    power: 15,
    effect: 'Destroy',
    description: 'Sand is my friend',
    imageUrl: './game-assets/opponents/the-great-sahara.png',
  },

  {
    id: uuidv4(),
    name: 'Sudden Simoom',
    power: 0,
    effect: 'Drain',
    description: 'Wind blows hard around these parts',
    imageUrl: './game-assets/opponents/sudden-simoom.png',
  },
];
