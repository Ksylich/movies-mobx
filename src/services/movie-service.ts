import axios from "axios";

import dotenv from "dotenv";

dotenv.config();

export default class MovieService {
   public getOneMoviePage = async (page: number) => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_BASE}/now_playing?${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`);
      return {
        movies: res.data.results.map(this.transformMovie),
        pages_count: res.data.total_pages,
      };
    } catch (e) {
      throw new Error(`Could not fetch!!! received ${e}`);
    }
  }

   public transformMovie = (movie: any) => ({
    id: movie.id,
    title: movie.original_title,
    overview: movie.overview,
    score: movie.vote_average,
    language: movie.original_language,
    realiseDate: movie.release_date,
    posterPath: movie.poster_path ? process.env.REACT_APP_POSTER_BASE + movie.poster_path : null,
  })
}
