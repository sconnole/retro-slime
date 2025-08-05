import { useState, useEffect } from 'react';
import { CardProps } from '../types';
import { createDeck, createOpponents } from '../utils';

export function useGameEngine() {
  const [deck, setDeck] = useState<CardProps[]>([]);
  const [discard, setDiscard] = useState<CardProps[]>([]);
  const [activeCards, setActiveCards] = useState<CardProps[]>([]);
  const [opponents, setOpponents] = useState<CardProps[]>([]);
  const [currentOpponent, setCurrentOpponent] = useState<CardProps | null>(null);
  const [gameAnimationComplete, setGameAnimationComplete] = useState(false);
  const [playerWon, setPlayerWon] = useState<boolean | null>(null);

  useEffect(() => {
    resetGame();
  }, []);

  useEffect(() => {
    if (gameAnimationComplete) {
      if (hasDefeatedOpponents()) {
        setDiscard((prev) => [...prev, ...activeCards]);
        setActiveCards([]);

        let newOpponents = opponents.slice(1);
        if (newOpponents.length < 1) setPlayerWon(true);

        setOpponents(newOpponents);
        setCurrentOpponent(newOpponents[0]);
      }
    }
  }, [gameAnimationComplete]);

  function hasDefeatedOpponents(): boolean {
    if (!currentOpponent) return false;

    const total = activeCards.reduce((sum, card) => sum + card.power, 0);
    return total >= currentOpponent.power;
  }

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

    const cards = deck.slice(0, count);
    const newDeck = deck.slice(count);
    setDeck(newDeck);
    const allActiveCards = [...activeCards, ...cards];
    setActiveCards(allActiveCards);
    setGameAnimationComplete(false);
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
    playerWon,
    setPlayerWon,
    gameAnimationComplete,
    setGameAnimationComplete,
  };
}
