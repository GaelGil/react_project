import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import type { Movie } from "../types/movie";
import "../css/Home.css";

// home component
const Home: React.FC = () => {
  // state vars
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // when anything changes on the componet it runs again, setting
  // the array at the end makes it so that theres no change
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("failed to load movies");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  // function to handle a search
  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent default beavhior of reloading
    if (!searchQuery.trim()) return; // if not full empty space
    if (loading) return; // if we are loading return
    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery); // get results
      setMovies(searchResults); // update the movies state with results
      setError(""); // update error state with empty string
    } catch {
      setError("failed to load error"); // update the error state with error
    } finally {
      setLoading(false); // update the loading state to false
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="search for movies"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading ... </div>
      ) : (
        <div className="movies-grid">
          {movies.map(
            (movie) =>
              movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard movie={movie} key={movie.id} />
              )
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
