import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
// favorites component
const Favorites: React.FC = () => {
  const { favorites } = useMovieContext();
  if (favorites) {
    <div className="favorites">
      <div className="movie-grid">
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>;
  }

  return (
    <div className="favorites-empty">
      <h2> no favorites yet</h2>
    </div>
  );
};

export default Favorites;
