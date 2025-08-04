import { useState, useEffect } from 'react';
import { CardProps } from '../types';
import { createDeck, createOpponents } from '../utils';

export function useGameEngine() {
  const [deck, setDeck] = useState<CardProps[]>([]);
  const [discard, setDiscard] = useState<CardProps[]>([]);
  const [drawn, setDrawn] = useState<CardProps[]>([]);
  const [opponents, setOpponents] = useState<CardProps[]>([]);
  const [currentOpponent, setCurrentOpponent] = useState<CardProps | null>(null);
  const [statusMessage, setStatusMessage] = useState<string>('');

  useEffect(() => {
    resetGame();
  }, []);

  function resetGame() {
    const newDeck = createDeck();
    const newOpponents = createOpponents();
    setDeck(newDeck);
    setDiscard([]);
    setDrawn([]);
    setOpponents(newOpponents);
    setCurrentOpponent(newOpponents[0]);
    setStatusMessage('');
  }

  function drawCards(count: number) {
    if (deck.length < count || !currentOpponent) return;

    const drawnCards = deck.slice(0, count);
    const newDeck = deck.slice(count);
    const total = drawnCards.reduce((sum, card) => sum + card.power, 0);

    let newOpponents = [...opponents];
    let message = '';

    if (total >= currentOpponent.power) {
      message = `✅ You drew ${total} and defeated the opponent!`;
      newOpponents.shift();
      setCurrentOpponent(newOpponents[0] || null);
    } else {
      message = `❌ You drew ${total}, not enough to beat ${currentOpponent.power}.`;
    }

    setDeck(newDeck);
    setDiscard((prev) => [...prev, ...drawnCards]);
    setDrawn(drawnCards);
    setOpponents(newOpponents);
    setStatusMessage(message);
  }

  const isGameOver = deck.length === 0 || opponents.length === 0;

  return {
    deck,
    discard,
    drawn,
    opponents,
    currentOpponent,
    statusMessage,
    isGameOver,
    drawCards,
    resetGame,
  };
}
