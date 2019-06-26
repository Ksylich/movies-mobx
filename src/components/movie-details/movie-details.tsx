import classNames from "classnames";
import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import "./movie-details.css";

import NoPoster from "../../assets/icons/NoPoster.jpg";
import { IMovieStore, MOVIES_STORE } from "../../mobx/stores/movies";
import Movie from "../../movie-object";
import { DecktopMovieInformation, DecktopNav } from "../movie-details-desktop";
import { MobMovieInformation, MobNav } from "../movie-details-mb";

interface IProps  extends RouteComponentProps {
  [MOVIES_STORE]?: IMovieStore;
  movie: Movie;
  isFavorite: boolean;
  onHandleNext: (event: any) => void;
}

@inject(MOVIES_STORE)
@observer
class MovieDetails extends Component<IProps> {

  public addToFavorites = () => {
    const { [MOVIES_STORE]: moviesStore, movie } = this.props;
    moviesStore!.addToFavorites(movie);
  }

  public render() {
    const {
      movie, history, isFavorite, onHandleNext,
    } = this.props;
    const style = classNames({ hidden: !isFavorite });
    const poster = movie.posterPath || NoPoster;
    const sectionStyle = {
      backgroundImage: `url(${poster})`,
    };

    return (
      <div className="wrapper">
        <div className="section" style={sectionStyle} />
        <div className="content">
          <MobNav onHandleBack={history.goBack} onHandleNext={onHandleNext} />
          <MobMovieInformation
            movie={movie}
            btnStyle={style}
            addToFavorites={this.addToFavorites}
          />
          <DecktopNav onHandleBack={history.goBack} onHandleNext={onHandleNext} />
          <DecktopMovieInformation
            movie={movie}
            btnStyle={style}
            addToFavorites={this.addToFavorites}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(MovieDetails);
