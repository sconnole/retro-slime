import { useState, useEffect } from 'react';
import { PlayerCard, OpponentCard } from '../types';
import { createDeck, createOpponents } from '../utils';

export function useGameEngine() {
  const [deck, setDeck] = useState<PlayerCard[]>([]);
  const [discard, setDiscard] = useState<PlayerCard[]>([]);
  const [drawn, setDrawn] = useState<PlayerCard[]>([]);
  const [opponents, setOpponents] = useState<OpponentCard[]>([]);
  const [currentOpponent, setCurrentOpponent] = useState<OpponentCard | null>(null);
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

    if (total >= currentOpponent.defense) {
      message = `✅ You drew ${total} and defeated the opponent!`;
      newOpponents.shift();
      setCurrentOpponent(newOpponents[0] || null);
    } else {
      message = `❌ You drew ${total}, not enough to beat ${currentOpponent.defense}.`;
    }

    setDeck(newDeck);
    setDiscard(prev => [...prev, ...drawnCards]);
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
