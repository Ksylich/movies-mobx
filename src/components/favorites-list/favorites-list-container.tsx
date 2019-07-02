import { inject, observer } from "mobx-react";
import React, { Component } from "react";

import { IMovieStore, MOVIES_STORE } from "../stores/movies";
import FavoritesList from "./favorites-list";

interface IProps {
  [MOVIES_STORE]?: IMovieStore;
}

interface IMethod {
  onHandleRemoveMovie: (id: number) => void;
}

@inject(MOVIES_STORE)
@observer
class FavoritesListContainer extends Component<IProps> implements IMethod {
  public onHandleRemoveMovie = (id: number) => {
    const { [MOVIES_STORE]: moviesStore } = this.props;
    moviesStore!.removeMovie(id);
  }

  public render() {
    const { [MOVIES_STORE]: moviesStore } = this.props;
    return (
      <FavoritesList
        favorites={moviesStore!.favorites}
        onHandleChooseMovie={moviesStore!.changeMovie}
        onHandleRemoveMovie={this.onHandleRemoveMovie}
      />
    );
  }
}

export default FavoritesListContainer;
