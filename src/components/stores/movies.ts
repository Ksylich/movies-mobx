import { action, observable } from "mobx";
import Movie from "../../movie-object";

import MovieServise from "../../services/movie-service";

export interface IMovieStore {
  movies: Movie[];
  loading: boolean;
  error: any;
  currentPage: number;
  currentMovieId: number;
  pagesCount: number;
  favorites: Movie[];

  fetchMovies(): void;
  moviesRequested(): void;
  moviesLoaded(mvs: Movie[]): void;
  changeCurrentPage(page: number): void;
  changePagesCount(count: number): void;
  moviesError(e: object): void;
  changeMovie(movie: number): void;
  removeMovie(movieId: number): void;
  addToFavorites(movie: Movie): void;
}

export const MOVIES_STORE = "MOVIES_STORE";
const movies = new MovieServise();

class MoviesStore implements IMovieStore {
  @observable public movies: Movie[] = [];
  @observable public loading = true;
  @observable public error = null;
  @observable public currentPage = 1;
  @observable public currentMovieId = 0;
  @observable public pagesCount = 0;
  @observable public favorites: Movie[] = [];

  @action.bound
  public async fetchMovies() {
    const page = this.currentPage;
    try {
      this.moviesRequested();
      const data = await movies.getOneMoviePage(page);
      this.moviesLoaded(data.movies);
      this.changePagesCount(data.pages_count);
    } catch (e) {
      this.moviesError(e);
    }
  }

  @action.bound
  public moviesRequested() {
    this.movies = [];
    this.loading = true;
    this.error = null;
  }

  @action.bound
  public moviesLoaded(mvs: Movie[]) {
    this.movies = mvs;
    this.loading = false;
    this.error = null;
  }

  @action.bound
  public changeCurrentPage(page: number) {
    this.currentPage = page;
    this.fetchMovies();
  }

  @action.bound
  public changePagesCount(count: number) {
    this.pagesCount = count;
  }

  @action.bound
  public moviesError(e: any) {
    this.movies = [];
    this.loading = false;
    this.error = e;
  }

  @action.bound
  public changeMovie(movie: number) {
    this.currentMovieId = movie;
  }

  @action.bound
  public removeMovie(movieId: number) {
    const movieIndex = this.favorites.findIndex((movie) => movie.id === movieId);
    this.favorites = [
      ...this.favorites.slice(0, movieIndex),
      ...this.favorites.slice(movieIndex + 1),
    ];
  }
  @action.bound
  public addToFavorites(movie: Movie) {
    this.favorites.push(movie);
  }
}

export const moviesStore = new MoviesStore();
