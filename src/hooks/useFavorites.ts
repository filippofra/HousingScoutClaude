import { useEffect, useState } from 'react';
import { Listing } from '../types';

const FAVORITES_KEY = 'housing-scout-favorites';

export function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    if (stored) {
      try {
        setFavoriteIds(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse favorites:', e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever favorites change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoriteIds));
    }
  }, [favoriteIds, isLoaded]);

  const toggleFavorite = (id: number) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const isFavorite = (id: number) => favoriteIds.includes(id);

  const markListingsWithFavorites = (listings: Listing[]): Listing[] => {
    return listings.map((listing) => ({
      ...listing,
      isFavorite: isFavorite(listing.id),
    }));
  };

  return { favoriteIds, toggleFavorite, isFavorite, markListingsWithFavorites, isLoaded };
}
