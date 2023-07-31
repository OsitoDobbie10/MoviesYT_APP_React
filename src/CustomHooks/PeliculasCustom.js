import { GenresMovies } from "../API/GetMovies";

export const loader = ()=>{
    const movies = GenresMovies()
    return movies;
}