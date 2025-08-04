import { CardProps } from '../types';
import { v4 as uuidv4 } from 'uuid';

const colors = [
  'blue',
  'brown',
  'gray',
  'green',
  'orange',
  'pink',
  'purple',
  'red',
  'teal',
  'yellow',
];

const slimeImageTemplates = ['{color}-slime.png', '{color}-slime-2.png', '{color}-bomb-slime.png'];

export const Slimes: CardProps[] = colors.flatMap((color) =>
  slimeImageTemplates.map((template) => {
    const fileName = template.replace('{color}', color);
    const name = fileName
      .replace('.png', '')
      .split('-')
      .map((part) => (part === color ? capitalize(color) : capitalize(part)))
      .join(' ');

    return {
      id: uuidv4(),
      name,
      power: getRandomPower(), // optional helper below
      effect: '',
      description: getRandomDescription(name),
      imageUrl: `./game-assets/slimes/${fileName}`,
    };
  })
);

function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function getRandomPower(): number {
  return Math.floor(Math.random() * 5) + 2; // Power 2–6
}

function getRandomDescription(name: string): string {
  return `The fearsome ${name} is ready for battle.`;
}
