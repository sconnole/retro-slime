import { useState, useEffect } from 'react';
import { CardProps } from '../types';
import { createDeck, createOpponents } from '../utils';

export function useGameEngine() {
  const [deck, setDeck] = useState<CardProps[]>([]);
  const [discard, setDiscard] = useState<CardProps[]>([]);
  const [activeCards, setActiveCards] = useState<CardProps[]>([]);
  const [opponents, setOpponents] = useState<CardProps[]>([]);
  const [currentOpponent, setCurrentOpponent] = useState<CardProps | null>(null);

  useEffect(() => {
    resetGame();
  }, []);

  function resetGame() {
    const newDeck = createDeck();
    const newOpponents = createOpponents();
    setDeck(newDeck);
    setDiscard([]);
    setActiveCards([]);
    setOpponents(newOpponents);
    setCurrentOpponent(newOpponents[0]);
  }

  function drawCards(count: number) {
    if (deck.length < count || !currentOpponent) return;

    const activeCards = deck.slice(0, count);
    const newDeck = deck.slice(count);
    const total = activeCards.reduce((sum, card) => sum + card.power, 0);

    let newOpponents = [...opponents];

    setDeck(newDeck);
    setDiscard((prev) => [...prev, ...activeCards]);
    setActiveCards(activeCards);
    setOpponents(newOpponents);
  }

  const isGameOver = deck.length === 0 || opponents.length === 0;

  return {
    deck,
    discard,
    activeCards,
    opponents,
    currentOpponent,
    isGameOver,
    drawCards,
    resetGame,
  };
}
