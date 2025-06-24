import type { ReactNode } from "react";
import type { Movie } from "./movie";
export interface MovieContextType {
  movie: string;
  setMovie: (movie: string) => void;
  favorites: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movieId: number) => void;
  isFavorite: (movieId: number) => boolean;
}

export type MovieProviderProps = {
  children: ReactNode;
};

// // Create a default value
// const defaultValue: MovieContextType = {
//   movie: "",
//   setMovie: () => {}, // no-op function
// };
