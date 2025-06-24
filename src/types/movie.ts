export type Movie = {
  id: string;
  url: string;
  title: string;
  release_date: string;
  poster_path: string;
};

export type MovieCardProps = {
  movie: Movie;
};
