import React, { createContext, useState } from "react";

interface FavoritesFilterProviderProps {
  children: React.ReactNode;
}

type FavoritesContextType = {
  favorites: string[];
  showFavorites: boolean;
  toggleFavorite: (id: string) => void;
  toggleShowFavorites: () => void;
};

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  showFavorites: false,
  toggleFavorite: () => {},
  toggleShowFavorites: () => {},
});

export const FavoritesProvider = ({
  children,
}: FavoritesFilterProviderProps) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const toggleFavorite = (id: string) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((fav) => fav !== id)
        : [...prevFavorites, id],
    );
  };

  const toggleShowFavorites = () => {
    setShowFavorites((prev) => !prev);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        showFavorites,
        toggleFavorite,
        toggleShowFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
