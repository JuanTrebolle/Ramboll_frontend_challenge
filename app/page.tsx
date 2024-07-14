'use client';

import React, { useState, useEffect } from "react";
import FlipCard from "./FlipCard";
import { fetchCards } from "./(utils)/fetchData";
import { Card } from "./(utils)/fetchData";

export default function Home() {
  const [cards, setCards] = useState<Card[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const fetchedCards = await fetchCards();
        setCards(fetchedCards);
      } catch (error) {
        setError('Failed to fetch cards');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {isLoading ? (
        <div className="flex justify-center items-center">
          <p className="text-xl font-medium">Loading cards...</p>
        </div>
      ) : error ? (
        <div className="text-center text-red-500 font-medium">{error}</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <FlipCard key={card.id} image={card.image} description={card.description}></FlipCard>
          ))}
        </div>
      )}
    </div>
  );
}
