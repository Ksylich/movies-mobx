import { inject, observer } from "mobx-react";
import React, { Component } from "react";

import { IMovieStore, MOVIES_STORE } from "../../mobx/stores/movies";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import MovieCards from "./movie-cards";

interface IProps {
  [MOVIES_STORE]?: IMovieStore;
}

@inject(MOVIES_STORE)
@observer
class MovieCardsContainer extends Component<IProps> {

  public componentDidMount() {
    const { [MOVIES_STORE]: moviesStore } = this.props;
    moviesStore!.fetchMovies();
  }

  public render() {
    const { [MOVIES_STORE]: moviesStore } = this.props;

    if (moviesStore!.loading) {
      return (
        <Spinner />
      );
    }

    if (moviesStore!.error) {
      return <ErrorIndicator />;
    }
    return <MovieCards movies={moviesStore!.movies} onHandleChooseMovie={moviesStore!.changeMovie} />;
  }
}

export default MovieCardsContainer;
