import { createContext } from "react";
import { useState , useEffect} from "react";
import { GetMoviesSoon,GetTVranted,GenresMovies} from "../API/GetMovies";
export const ContextoGlobal = createContext();
export function ProviderContextoGlobal ({children}){
    const [peliculasSoon,setPeliculasSoon] = useState([])
    const [peliculas2,setPeliculas2] = useState([])
    const [mostRanted,setMostRanted] = useState([])
    const [tvRanted,setTvRanted] = useState([])
    const [upcomingmovies,setUpcomingmovies] = useState([]);
    const [seriesTv,setSeriesTv] = useState([]);
    const [paginaseries,setPaginaseries] = useState(1);
    //Arreglo peliculas
    const [arregleAllMovies,setArregleAllMovies] = useState([]);
    //Arreglo Genres 
    const [arreglogenres,setArreglogenres] = useState([]);
    const [arreglogenres2,setArreglogenres2] = useState([]);
    const [buscarpeliculas,setBuscarPeliculas] = useState({});
    //Arreglos de busqueda
    const [searchmovies1,setSearchmovies1] = useState([]);
    const [searchmovies2,setSearchmovies2] = useState("");
    const [searchmovies3,setSearchmovies3] = useState(null);
    const [stade2,setStade2] = useState(false);
    //Arreglo de bisqueda de TV
    const [searchtv,setSearchtv] = useState([]);
    const [searchtv2,setSearchtv2] = useState('');
    
   //Arreglo de vista de grandes datos
   const [arreglopeliculas,setArreglopeliculas] = useState([]);
   const [arregloseries,setArregloseries] = useState([]);

    const [vista1,setVista1] = useState(true);
    const [vista2,setVista2] = useState(true);
    const [vista3,setVista3] = useState(true);
    const [PaginaMovies,setPaginaMovies] = useState(1);
    const urlGetMovieSoon = 'https://api.themoviedb.org/3/movie/upcoming?language=es-ES';
    const urlMovie2 = 'https://api.themoviedb.org/3/movie/upcoming?language=es-ES&page=2';
    const urldata = 'https://api.themoviedb.org/3/trending/all/day?language=es-ES'
    const urlMostRanted = 'https://api.themoviedb.org/3/movie/top_rated?language=es-ES';
    const urlTVRanted = `https://api.themoviedb.org/3/tv/top_rated?language=es-ES&page=${paginaseries}`;
    const urlUpcomingMovies = 'https://api.themoviedb.org/3/movie/upcoming?language=es-ES';
    //URL Movie 
    const AllMoviesURL = `https://api.themoviedb.org/3/movie/popular?language=es-ES&page=${PaginaMovies}`;
    //URL Genres Movies
    useEffect(()=>{
        GetMoviesSoon(urlGetMovieSoon)
        .then((gis)=>{
            setPeliculasSoon(gis)
        })
    },[])
    useEffect(()=>{
      GetMoviesSoon(urldata)
      .then((gis2)=>{
        setPeliculas2(gis2)
      })
    },[])
    useEffect(()=>{
      GetMoviesSoon(urlMostRanted)
      .then((gis3)=>{
        setMostRanted(gis3)})
    },[])
    useEffect(()=>{
      GetTVranted(paginaseries)
      .then((gis4)=>{
        setTvRanted(gis4)
      })
    },[])
    useEffect(()=>{
      GetMoviesSoon(urlUpcomingMovies)
      .then((gis5)=>{
        setUpcomingmovies(gis5)
      })
    },[])
    useEffect(()=>{
      GenresMovies()
      .then((gis7)=>{
        setArreglogenres(gis7);
      })
    },[])

    return <ContextoGlobal.Provider value={{
              buscarpeliculas,
              setBuscarPeliculas,
              vista1,
              setVista1,
              vista2,
              setVista2,
              vista3,
              setVista3,
              peliculasSoon,
              peliculas2,
              mostRanted,
              tvRanted,
              setTvRanted,
              upcomingmovies,
              setUpcomingmovies,
              arregleAllMovies,
              setArregleAllMovies,
              arreglogenres,
              setArreglogenres,
              PaginaMovies,
              setPaginaMovies,
              seriesTv,
              setSeriesTv,
              paginaseries,
              setPaginaseries,
              urlTVRanted,
              searchmovies1,
              setSearchmovies1,
              searchmovies2,
              setSearchmovies2,
              searchmovies3,
              setSearchmovies3,
              stade2,
              setStade2,
              searchtv,setSearchtv,
              searchtv2,setSearchtv2
               }}>
               {children}
           </ContextoGlobal.Provider>
}