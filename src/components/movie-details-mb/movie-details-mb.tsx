import React from "react";

import star from "../../assets/icons/US_Army_Star.png";
import Movie from "../../movie-object";
import Poster from "../poster";

import "./movie-details-mb.css";

interface IProps {
  movie: Movie;
  addToFavorites: (event: any) => void;
  btnStyle: string;
}

const MobMovieInformation: React.FC<IProps> = ({ movie, addToFavorites, btnStyle }) => {
  return (
    <div className="desk-m">
      <div className="deck-top">
        <div className="image">
          <Poster posterPath={movie.posterPath} />
        </div>
        <div className="info-mob">
          <div className="info-top">
            <div className="score-mob">
              <div className="txt">Score:</div>
              <div className="txt-data">{movie.score}</div>
            </div>
            <div onClick={addToFavorites} role="presentation" className={`icon ${btnStyle}`}>
              <img src={star} alt="Smiley face" height={150} width={150} />
            </div>
          </div>
          <div className="score-mob">
            <div className="txt">Language:</div>
            <div className="txt-data">{movie.language}</div>
          </div>
          <div className="score-mob">
            <div className="txt">Realise-Date:</div>
            <div className="txt-data">{movie.realiseDate}</div>
          </div>
        </div>
      </div>
      <div className="desk-bottom">
        <div className="mob-movie-title">{`${movie.title}`}</div>
        <div className="mob-overview">{`${movie.overview}`}</div>
      </div>
    </div>
  );
};

export default MobMovieInformation;
