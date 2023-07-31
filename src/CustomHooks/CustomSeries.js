import { GeneresTv } from "../API/GetMovies";

export const loader = ()=>{
    const listseries = GeneresTv()
    return listseries;
}