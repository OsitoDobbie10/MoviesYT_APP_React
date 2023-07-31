import React, { useEffect, useState } from 'react'
import {FaSistrix} from 'react-icons/fa6'
import CallContext from '../CustomHooks/CallContext';
import AutoComplete from './Autocomplete';
//import CustomSearch from './CustomSearch';
import { SearchMovies1 } from '../API/GetMovies';
import './index.css';
const MovieSearch = () => {
   const {peliculasSoon} = CallContext();
   const [country, setcountry] = useState("");
  return (
    <div className="search-bar-container">
                <AutoComplete
                    data={peliculasSoon}
                    onSelect={country => setcountry(country)}
                />

                <FaSistrix
                    
                    className="search-bar-icon"
                />
    </div>
  )
}

export default MovieSearch
