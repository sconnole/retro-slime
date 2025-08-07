import { useState, useEffect } from 'react';
import { CardProps } from '../types';
import { createDeck, createOpponents, delay } from '../utils';
import { CARD_ANIMATION_DURATION } from '../constants';

export function useGameEngine() {
  const [deck, setDeck] = useState<CardProps[]>([]);
  const [discard, setDiscard] = useState<CardProps[]>([]);
  const [activeCards, setActiveCards] = useState<CardProps[]>([]);
  const [opponents, setOpponents] = useState<CardProps[]>([]);
  const [currentOpponent, setCurrentOpponent] = useState<CardProps | null>(null);
  const [opponetDiscard, setOpponentDiscard] = useState<CardProps[]>([]);
  const [playerWon, setPlayerWon] = useState<boolean | null>(null);

  useEffect(() => {
    resetGame();
  }, []);

  useEffect(() => {
    if (activeCards.length === 0) return;

    const check = async () => {
      await delay(CARD_ANIMATION_DURATION * 2);
      checkOpponentIsDefeated();
    };

    check();
  }, [activeCards]);

  function checkOpponentIsDefeated(): void {
    if (opponentIsDefeated()) {
      playerDiscard();
      opponentDiscard();
    } else {
      // TODO activate opponent effects
    }
  }

  function opponentIsDefeated(): boolean {
    if (!currentOpponent) return false;

    const total = activeCards.reduce((sum, card) => sum + card.power, 0);
    console.log(total, currentOpponent.power);
    return total >= currentOpponent.power;
  }

  function playerDiscard() {
    setActiveCards([]);
  }

  function opponentDiscard() {
    setOpponentDiscard((prev) => {
      return [...prev, opponents[0]];
    });
    let newOpponents = opponents.slice(1);
    if (newOpponents.length < 1) setPlayerWon(true);

    setOpponents(newOpponents);
    setCurrentOpponent(newOpponents[0]);
  }

  function resetGame() {
    const newDeck = createDeck();
    const newOpponents = createOpponents();
    setDeck(newDeck);
    setDiscard([]);
    setActiveCards([]);
    setOpponents(newOpponents);
    setCurrentOpponent(newOpponents[0]);
    setOpponentDiscard([]);
  }

  function drawCards(count: number) {
    if (deck.length < count || !currentOpponent) return;

    const cards = deck.slice(0, count);
    const newDeck = deck.slice(count);
    setDeck(newDeck);
    const allActiveCards = [...activeCards, ...cards];
    setActiveCards(allActiveCards);
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
    checkOpponentIsDefeated,
    opponetDiscard,
  };
}
