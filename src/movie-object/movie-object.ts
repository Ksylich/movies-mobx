
interface IMovie {
    id: number;
    title: string;
    overview: string;
    score: number;
    language: string;
    realiseDate: string;
    posterPath: string;
   }

export type Movie = IMovie;
