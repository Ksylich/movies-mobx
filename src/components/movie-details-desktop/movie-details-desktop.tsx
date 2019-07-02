import React from "react";

import "./movie-details-desktop.css";

import Movie from "../../movie-object";
import Poster from "../poster";

interface IProps {
  movie: Movie;
  addToFavorites: (event: any) => void;
  btnStyle: string;
}

const DecktopMovieInformation: React.FC<IProps> = ({
  movie,
  addToFavorites,
  btnStyle,
}) => {

  return (
    <div className="container">
      <div className="desk">
        <div className="image">
          <Poster posterPath={movie.posterPath}/>
        </div>
        <div className="info">
          <div className="row top">
            <button
              onClick={addToFavorites}
              type="button"
              className={`btn btn-default ${btnStyle}`}
            >
              Add to favorite
            </button>
          </div>
          <div className="movie-title">{`${movie.title}`}</div>
          <div className="about">
            <div className="score">{`Score: ${movie.score}`}</div>
            <div className="language">{`Language:  ${movie.language}`}</div>
            <div className="realise-date">
              {`Realise-Date: ${movie.realiseDate}`}
            </div>
          </div>
          <div className="overview">{`${movie.overview}`}</div>
        </div>
      </div>
    </div>
  );
};

export default DecktopMovieInformation;
