import searchmovies from '../API/searchmovies';
import searcTVseries from '../API/searchTvseries';
import { useCallback,useRef } from 'react';
import CallContext from '../CustomHooks/CallContext';

export function GetMoviesArray({search}){
    const {searchmovies1,setSearchmovies1,setSearchmovies3} = CallContext();
    const previousSearch = useRef(search);
    const getmovies = useCallback(async ({search})=>{
        if (search === previousSearch.current) return
        try {
        previousSearch.current = search;
        const newMovies = await searchmovies({search});
        const newSeries = await searcTVseries({search});
        setSearchmovies1([...newMovies,...newSeries]);
        } catch (error) {
        setSearchmovies3(error.message)
        }
    },[])
    return {getmovies}
}