// movie type for declaring var types
export type Movie = {
  id: number;
  url: string;
  title: string;
  release_date: string;
  poster_path: string;
  setMovie: (movie: string) => void;
  favorites: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movieId: number) => void;
  isFavorite: (movieId: number) => boolean;
};

// moviecardProps type for declaring var types
export type MovieCardProps = {
  movie: Movie;
};
