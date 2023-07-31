const searchmovies = async({ search })=>{
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
      votopopular: paras.vote_average}))
    
    return newarray
      
    } 
    catch (error) {
      throw new Error('Error searching movies')
    }
  }

  export default searchmovies;