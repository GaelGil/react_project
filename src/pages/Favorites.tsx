import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
// favorites component
const Favorites: React.FC = () => {
  const { favorites } = useMovieContext(); // import moviecontext to load favorites
  // if we have favorites we will load this
  if (favorites) {
    return (
      <div className="favorites">
        <div className="movie-grid">
          {favorites.map((movie) => (
            // import moviecard imponent
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  // if not we will load this
  return (
    <div className="favorites-empty">
      <h2> no favorites yet</h2>
    </div>
  );
};

export default Favorites;
