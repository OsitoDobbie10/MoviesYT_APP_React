import Footer from './Footer';
import Homecover from './Homecover';
import Vistas from './Vistas';
import Vista2 from './Vista2';
import CallContext from '../CustomHooks/CallContext';
//import Carruzelcontainer from './Carruzelcontainer';
import ArregloMoviesHome1 from './ArregloMoviesHome1';
import ArregloMoviesHome2 from '../ComponentArray2/ArreglomoviesHome2';
import ArregloMoviesHome3 from '../ComponentArray3/ArreglomoviesHome3';
import ArregloMoviesHome4 from '../ComponentArray4/ArreglomoviesHome4';
import { useState } from 'react';
import Spinner from './Spinner';
import ScrollToTop from './ScrollToTop';
import '../Styles/Home.css';
import MovieSearch from '../ComponentsSearch/MovieSearch';
import { ArrayMovies } from './ArrayMovies';
const Inicio = () => {
  const {vista1,vista2,
         peliculasSoon,peliculas2,
         mostRanted,tvRanted,
         upcomingmovies,
         searchmovies1,
         stade2} = CallContext();

  const [loading,setLoading] = useState(true);
  setTimeout(()=>{
    setLoading(false)
  },3000)
  if (loading) return <Spinner/>
  return (
    <div className='HomeTotal'>
      {
        stade2 && <ArrayMovies movies={searchmovies1}/>
      }
      <ScrollToTop/>
      <Homecover/>
      <Vistas 
      texto1='Tendencia de'
      texto2='Hoy'
      texto3='Esta semana'/>
      {
        vista1 ? 
        <ArregloMoviesHome1 peliculas={peliculasSoon}/>:
        <ArregloMoviesHome2 peliculas={peliculas2}/>
      }
      <Vista2 
      texto1='Lo mas valorado'
      texto2='Peliculas'
      texto3='Series'/>
      {
        vista2 ? 
       <ArregloMoviesHome3 peliculas={mostRanted}/>:
       <ArregloMoviesHome4 peliculas={tvRanted}/>
      }
      <h1 style={{fontWeight:'bold',marginTop: '10px', fontSize: '30px'}}>Proximos</h1>
      <ArregloMoviesHome1 peliculas={upcomingmovies}/>
      <Footer/>
    </div>
  )
}

export default Inicio
