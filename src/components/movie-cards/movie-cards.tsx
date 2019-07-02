import React, { useCallback } from "react";

import Movie from "../../movie-object";
import MovieCardItem from "../movie-card-item";
import "./movie-cards.css";

interface IProps {
  movies: Movie[];
  onHandleChooseMovie: (event: any) => void;
}

const MovieCards: React.FC<IProps> = ({ movies, onHandleChooseMovie }) => {
  const renderMovie = useCallback(
    (movie) => (
      <MovieCardItem
        key={movie.id}
        movie={movie}
        idx={movies.findIndex((m: Movie) => m.id === movie.id)}
        onHandleChooseMovie={onHandleChooseMovie}
      />
    ),
    [movies, onHandleChooseMovie],
  );

  return (
    <div className="body">
      {movies.map(renderMovie)}
    </div>
  );
};

export default MovieCards;
