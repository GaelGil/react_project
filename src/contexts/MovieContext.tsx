import { createContext, useState, useContext, useEffect } from "react";
import type { MovieContextType } from "../types/movieContext";
import type { MovieProviderProps } from "../types/movieContext";
import type { Movie } from "../types/movie";
const defaultValue: MovieContextType = {
  movie: "",
  setMovie: () => {},
  favorites: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
  isFavorite: () => false,
};
const MovieContext = createContext<MovieContextType>(defaultValue);
export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }: MovieProviderProps) => {
  const [movie, setMovie] = useState("");
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) setFavorites(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie: Movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFromFavorites = (movieId: number) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavorite = (movieId: number) => {
    return favorites.some((movie) => movie.id !== movieId);
  };

  const value: MovieContextType = {
    movie,
    setMovie,
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
