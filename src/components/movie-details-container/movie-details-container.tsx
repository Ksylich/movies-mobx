import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import {
  withLastLocation,
  WithLastLocationProps,
} from "react-router-last-location";
import Movie from "../../movie-object";

import MovieDetails from "../movie-details";
import { IMovieStore, MOVIES_STORE } from "../stores/movies";

interface IProps extends WithLastLocationProps {
  [MOVIES_STORE]?: IMovieStore;
}

interface IMethods {
  returnArr(): void;
  findCurrentMovie(movies: Movie[]): void;
  checkIsFavorite(movie: Movie): void;
}

@inject(MOVIES_STORE)
@observer
class MovieDetailsContainer extends Component<IProps> implements IMethods {
  public onNextClick = () => {
    const { [MOVIES_STORE]: moviesStore } = this.props;
    const movies = this.returnArr();

    const next =
      movies.findIndex((movie) => movie.id === moviesStore!.currentMovieId) + 1;

    moviesStore!.changeMovie(
      next >= movies.length ? movies[0].id : movies[next].id,
    );
  }

  public returnArr() {
    const { [MOVIES_STORE]: moviesStore, lastLocation } = this.props;
    return lastLocation!.pathname === "/"
      ? moviesStore!.movies
      : moviesStore!.favorites;
  }

  public findCurrentMovie(movies: Movie[]) {
    const { [MOVIES_STORE]: moviesStore } = this.props;
    return movies.find((m) => m.id === moviesStore!.currentMovieId);
  }

  public checkIsFavorite(movie: Movie) {
    const { [MOVIES_STORE]: moviesStore } = this.props;
    return !moviesStore!.favorites.find((mov) => mov.id === movie.id);
  }

  public render() {
    const mvs = this.returnArr();
    const movie = this.findCurrentMovie(mvs);
    if (movie === undefined) {
      return <h1>Error! Something wrong!!!</h1>;
    }
    const isFavorite = this.checkIsFavorite(movie);
    return (
      <MovieDetails
        movie={movie}
        isFavorite={isFavorite}
        onHandleNext={this.onNextClick}
      />
    );
  }
}

export default withLastLocation(MovieDetailsContainer);
