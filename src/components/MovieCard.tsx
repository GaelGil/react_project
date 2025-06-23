import React from "react";
// const items = [
//   { title: "Card 1", text: "This is the first card." },
//   { title: "Card 2", text: "This is the second card." },
//   { title: "Card 3", text: "This is the third card." },
// ];
type Movie = {
  url: string;
  title: string;
  release_date: string;
};

type MovieCardProps = {
  movie: Movie;
};

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  function onFavoriteClick() {
    alert("clicked");
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-button" onClick={onFavoriteClick}>
            🤍
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
