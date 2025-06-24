// movie type for declaring var types
export type Movie = {
  id: string;
  url: string;
  title: string;
  release_date: string;
  poster_path: string;
};

// moviecardProps type for declaring var types
export type MovieCardProps = {
  movie: Movie;
};
