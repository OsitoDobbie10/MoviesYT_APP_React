import { useCallback } from 'react';
import CallContext from '../CustomHooks/CallContext'
import { GetMoviesArray } from './GetMoviesArray';
import debounce from 'just-debounce-it'
const CustomSearch = () => {
    const {searchmovies2,
           setSearchmovies2} = CallContext();
    const {getmovies} = GetMoviesArray({searchmovies2});

    const debouncedGetMovies = useCallback(
        debounce(search => {
            console.log('search', search)
            getmovies({ searchmovies2 })
        }, 300)
        , [getmovies]
      )

    const handleSubmit = (event) => {
        event.preventDefault()
        getmovies({ searchmovies2 })
      }
    const handlechange = (event)=>{
        const search = event.target.value;
        setSearchmovies2(search);
        debouncedGetMovies(search)
    }

  return {handlechange,handleSubmit}
}

export default CustomSearch
