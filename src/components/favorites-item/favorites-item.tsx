import React, { useCallback } from "react";
import { Link } from "react-router-dom";

import "./favorites-item.css";

import NoPoster from "../../assets/icons/NoPoster.jpg";
import Movie from "../../movie-object";

interface IProps {
  movie: Movie;
  onHandleRemoveMovie: (event: any) => void;
  onHandleChooseMovie: (event: any) => void;
}

const FavoriteItem: React.FC<IProps> = ({
  movie,
  onHandleRemoveMovie,
  onHandleChooseMovie,
}) => {
  const poster = movie.posterPath || NoPoster;

  const chooseMovie = useCallback(() => {
    onHandleChooseMovie(movie.id);
  }, [movie.id, onHandleChooseMovie]);

  const removeMovie = useCallback(() => {
    onHandleRemoveMovie(movie.id);
  }, [movie.id, onHandleRemoveMovie]);

  return (
    <div className="item-list">
      <div className="item">
        <div onClick={chooseMovie} role="presentation" className="image_fav">
          <Link className="lnk" to="/movie-details-page">
            <img src={poster} alt="Smiley face" />
          </Link>
        </div>
        <div className="info">
          <div className="fav-info-top">
            <div className="fav-title">{movie.title}</div>
            <button
              onClick={removeMovie}
              type="button"
              className="btn btn-default"
            >
              Unfavorite
            </button>
          </div>
          <div className="overview-fav">{`${movie.overview}`}</div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteItem;
