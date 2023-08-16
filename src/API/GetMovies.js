export const GetMoviesSoon = async(url)=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjU1MmYwOTZiZTg0YzhjNGQxY2JiNTUzNTQ0OWM0OCIsInN1YiI6IjY0YjhhMzRhNGQyM2RkMDEwNjk2MDYyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tgD4Z3dS5E-OYscZAemQhrKTUi8vp4WxCPpggbHfoK8'
        }
      };

      const data = await fetch(url,options);
      const response = await data.json();
      const {results} = response;
      const newarray = results.map((paras)=>({
        id: paras.id,
        titulo: paras.original_title,
        resumen: paras.overview,
        imagen: `https://image.tmdb.org/t/p/w300/${paras.poster_path}`,
        fecharealizada: paras.release_date,
        votopopular: paras.vote_average
      }))
      const Copianewarray = [... newarray];
      const Moviearray = (array)=>{
        return array.map((value,index)=>({
          id: value.id,
          titulo: value.titulo,
          resumen: value.resumen,
          imagen: value.imagen,
          fecharealizada: value.fecharealizada,
          votopopular: value.votopopular,
          idx: index + 1,
          pos: index + 1,
          active: index >= 0 && index < 4 ? true : false
          }))}
       
     const Final = Moviearray(Copianewarray)
     return Final 
}

export const GetTVranted = async(paginaseries)=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjU1MmYwOTZiZTg0YzhjNGQxY2JiNTUzNTQ0OWM0OCIsInN1YiI6IjY0YjhhMzRhNGQyM2RkMDEwNjk2MDYyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tgD4Z3dS5E-OYscZAemQhrKTUi8vp4WxCPpggbHfoK8'
    }
  };
  const urlTVRanted = `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=${paginaseries}`;
  const data = await fetch(urlTVRanted,options);
  const response = await data.json();
  const {results} = response;
  const newarray = results.map((paras)=>({
    fecharealizada: paras.first_air_date,
    generos: paras.genre_ids,
    id: paras.id,
    titulo: paras.name,
    resumen: paras.overview,
    imagen: `https://image.tmdb.org/t/p/w300/${paras.poster_path}`,
    votopopular: paras.vote_average
  }))
  const Copianewarray = [... newarray];
  const Moviearray = (array)=>{
    return array.map((value,index)=>({
      fecharealizada: value.fecharealizada, 
      generos: value.generos,
      id: value.id,
      titulo: value.titulo,
      resumen: value.resumen,
      imagen: value.imagen,
      votopopular: value.votopopular,
      idx: index + 1,
      pos: index + 1,
      active: index >= 0 && index < 4 ? true : false
      }))}
   
 const Final = Moviearray(Copianewarray)
 return Final 
}
//Movies DATA
export const GetAllMovies = async(PaginaMovies)=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjU1MmYwOTZiZTg0YzhjNGQxY2JiNTUzNTQ0OWM0OCIsInN1YiI6IjY0YjhhMzRhNGQyM2RkMDEwNjk2MDYyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tgD4Z3dS5E-OYscZAemQhrKTUi8vp4WxCPpggbHfoK8'
    }
  };
  const AllMoviesURL = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${PaginaMovies}`;
  const response = await fetch(AllMoviesURL, options);
  const data = await response.json();
  const {results} = data;
  const newarray = results.map((paras)=>({
    generos: paras.genre_ids,
    id: paras.id,
    lenguaje: paras.original_language,
    titulo: paras.original_title,
    resumen: paras.overview,
    imagen: `https://image.tmdb.org/t/p/w300/${paras.poster_path}`,
    fecharealizada: paras.release_date,
    votopopular: paras.vote_average
  }))

  const Copianewarray = [... newarray];
      const Moviearray = (array)=>{
        return array.map((value,index)=>({
          generos: value.generos,
          id: value.id,
          titulo: value.titulo,
          resumen: value.resumen,
          imagen: value.imagen,
          fecharealizada: value.fecharealizada,
          votopopular: value.votopopular,
          idx: index + 1,
          pos: index + 1,
          active: index >= 0 && index < 4 ? true : false
          }))}
       
     const Final = Moviearray(Copianewarray)
     return Final 
} 

//List Genres Movies
export const GenresMovies = async()=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjU1MmYwOTZiZTg0YzhjNGQxY2JiNTUzNTQ0OWM0OCIsInN1YiI6IjY0YjhhMzRhNGQyM2RkMDEwNjk2MDYyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tgD4Z3dS5E-OYscZAemQhrKTUi8vp4WxCPpggbHfoK8'
    }
  };
 const AllGenresMovies = 'https://api.themoviedb.org/3/genre/movie/list?language=es-ES';
 const response = await fetch(AllGenresMovies, options);
 const data = await response.json();
 const {genres} = data;
 return genres
}

//List Genres Tv
export  const GeneresTv = async()=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjU1MmYwOTZiZTg0YzhjNGQxY2JiNTUzNTQ0OWM0OCIsInN1YiI6IjY0YjhhMzRhNGQyM2RkMDEwNjk2MDYyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tgD4Z3dS5E-OYscZAemQhrKTUi8vp4WxCPpggbHfoK8'
    }
  };
  const AllGenresTv = 'https://api.themoviedb.org/3/genre/tv/list?language=es-ES'
  const response = await fetch(AllGenresTv, options);
  const data = await response.json();
  const {genres} = data;
  return genres
}


export const SearchMovies1 = async({ search })=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjU1MmYwOTZiZTg0YzhjNGQxY2JiNTUzNTQ0OWM0OCIsInN1YiI6IjY0YjhhMzRhNGQyM2RkMDEwNjk2MDYyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tgD4Z3dS5E-OYscZAemQhrKTUi8vp4WxCPpggbHfoK8'
    }
  };
  if (search === '') return null
  try {
  const urlsearchmovies = `https://api.themoviedb.org/3/search/movie?query=${search}&language=es-ES&page=1`
  const response = await fetch(urlsearchmovies, options);
  const data = await response.json();
  const {results} = data;
  const newarray = results.map((paras)=>({
    generos: paras.genre_ids,
    id: paras.id,
    lenguaje: paras.original_language,
    titulo: paras.original_title,
    resumen: paras.overview,
    popularidad: paras.popularity,
    imagen: `https://image.tmdb.org/t/p/w300/${paras.poster_path}`,
    fecharealizada: paras.release_date,
    titulo2:paras.title,
    votopopular: paras.vote_average
  }))
  return newarray;
    
  } catch (error) {
    throw new Error('Error searching movies')
  }
}

export const SearchMovies2 = async(search)=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjU1MmYwOTZiZTg0YzhjNGQxY2JiNTUzNTQ0OWM0OCIsInN1YiI6IjY0YjhhMzRhNGQyM2RkMDEwNjk2MDYyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tgD4Z3dS5E-OYscZAemQhrKTUi8vp4WxCPpggbHfoK8'
    }
  };
  const urlsearchmovies = `https://api.themoviedb.org/3/search/movie?query=${search}&language=es-ES&page=2`
  const response = await fetch(urlsearchmovies, options);
  const data = await response.json();
  const {results} = data;
  const newarray = results.map((paras)=>({
    generos: paras.genre_ids,
    id: paras.id,
    lenguaje: paras.original_language,
    titulo: paras.original_title,
    resumen: paras.overview,
    popularidad: paras.popularity,
    imagen: `https://image.tmdb.org/t/p/w300/${paras.poster_path}`,
    fecharealizada: paras.release_date,
    titulo2:paras.title,
    votopopular: paras.vote_average
  }))
  return newarray;
}

//Actores buscar
export const Actor = async()=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjU1MmYwOTZiZTg0YzhjNGQxY2JiNTUzNTQ0OWM0OCIsInN1YiI6IjY0YjhhMzRhNGQyM2RkMDEwNjk2MDYyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tgD4Z3dS5E-OYscZAemQhrKTUi8vp4WxCPpggbHfoK8'
    }
  };
  const url = `https://api.themoviedb.org/3/trending/person/day?language=es-ES`;
  const response = await fetch(url, options);
  const data = await response.json();
  const {results} = data;
  const newarray = results.map((paras)=>({
    id: paras.id,
    nombre: paras.name,
    nombreOriginal: paras.original_name,
    imagen: `https://image.tmdb.org/t/p/w300/${paras.profile_path}`,
    popular: paras.popularity,
    genero: paras.known_for_department,
    Arreglo:paras.known_for
  }));
  return newarray;
}

//Find Movies
export const Video = async({id})=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjU1MmYwOTZiZTg0YzhjNGQxY2JiNTUzNTQ0OWM0OCIsInN1YiI6IjY0YjhhMzRhNGQyM2RkMDEwNjk2MDYyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tgD4Z3dS5E-OYscZAemQhrKTUi8vp4WxCPpggbHfoK8'
    }
  };
  
 const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
 const response = await fetch(url, options);
 const data = await response.json();
 const {results} = data;
 const newarray = results.map((paras)=>({
    id: paras.id,
    nombre: paras.name,
    url: `https://www.youtube.com/watch?v=${paras.key}`,
    sitio: paras.site 
  }));
  return newarray;

}


