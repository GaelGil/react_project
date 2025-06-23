import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import { useState } from "react";

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    { id: 1, title: "1234", release_date: "2022", url: "" },
    { id: 2, title: "5678", release_date: "2022", url: "" },
    { id: 3, title: "9101112", release_date: "2022", url: "" },
  ];

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(searchQuery);
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
      <div className="movie-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
};

export default Home;
