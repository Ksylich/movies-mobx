import React, { useCallback } from "react";
import { Link } from "react-router-dom";

import "./movie-card-item.css";

// TODO: Создай лучше отдельный компонент для постера, чтоб картинку ипортировать только 1 раз
import NoPoster from "../../assets/icons/NoPoster.jpg";

interface IProps {
  movie: { id: number; title: string; posterPath: string };
  idx: number;
  onHandleChooseMovie: (event: any) => void;
}

const MovieCardItem = ({ movie, idx, onHandleChooseMovie }: IProps) => {
  const { title, posterPath } = movie;

  const style = `crd crd-${idx}`;

  const poster = posterPath || NoPoster;

  const chooseMovie = useCallback(() => {
    onHandleChooseMovie(movie.id);
  }, [movie.id, onHandleChooseMovie]);

  return (
    <div
      className={style}
      data-title={title}
      role="presentation"
      onClick={chooseMovie}
    >
      <Link className="lnk" to="/movie-details-page">
        <img src={poster} alt="" className="card-img-top" />
      </Link>
    </div>
  );
};

export default MovieCardItem;
