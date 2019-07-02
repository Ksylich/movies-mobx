import classNames from "classnames";
import React, { useCallback } from "react";
import { Link } from "react-router-dom";

import "./movie-card-item.css";

import Poster from "../poster";

interface IProps {
  movie: { id: number; title: string; posterPath: string };
  idx: number;
  onHandleChooseMovie: (event: any) => void;
}

const MovieCardItem: React.FC<IProps> = ({ movie, idx, onHandleChooseMovie }) => {
  const { title, posterPath } = movie;

  const style = `crd crd-${idx}`;

  const chooseMovie = useCallback(() => {
    onHandleChooseMovie(movie.id);
  }, [movie.id, onHandleChooseMovie]);

  const stl = classNames("card-img-top");

  return (
    <div
      className={style}
      data-title={title}
      role="presentation"
      onClick={chooseMovie}
    >
      <Link className="lnk" to="/movie-details-page">
        <Poster posterPath={posterPath} style={stl} />
      </Link>

    </div>
  );
};

export default MovieCardItem;
