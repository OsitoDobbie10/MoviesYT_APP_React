import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import SeriesHooks from '../CustomHooks/SeriesHooks'
import {FaFilm} from 'react-icons/fa'
import '../Styles/GetMovieHouse.css'
import Estrellita from '../Files/estrella.png'
import CallContext from '../CustomHooks/CallContext'
import { ArrayMovies } from './ArrayMovies'
import Footer from '../Componets/Footer'
const FiltroSerie = () => {
  const {searchmovies1,stade2} = CallContext();
  const {seriesTv} = SeriesHooks();
  const Params5 = useParams();
  const Back5 = useNavigate();
  const getUser = (id)=>{
      return seriesTv.find((user)=>user.id === id);
    }
  const user5 = getUser(parseInt(Params5.seriesId))
  const {fecharealizada,imagen,resumen,titulo,votopopular} = user5;
  return (
    <div className='FiltroHOME'>
      {
        stade2 && <ArrayMovies movies={searchmovies1}/>
      }
    <div className='mb-8 flex gap-2 ml-5 justify-center'>
   <FaFilm className='text-7xl text-red-700'/>
   <h1 className='color font-bold text-4xl mt-3'>Consulta de peliculas</h1>
    </div>
    <button className='Boton' onClick={()=>Back5('/TV')}>Inicio</button>
   <div className="FiltroHomePeliculas">
   <div className='Imagen-Banner'>
   <img src={imagen} alt={titulo} />
   </div>
   <div className='Datos-home'>
   <h1>{titulo}</h1>
   <h2>Resumen</h2>
   <p>{resumen}</p>
   <h2>Estreno: {fecharealizada}</h2>
   <div className='puntuacion'>
   <img src={Estrellita} alt="Voto" />  
   <span>{votopopular}</span>
   </div>
   <span>Titulo Original</span>
   <h3>{titulo}</h3>
   <button className='VerTrailer'>Ver Trailer</button>
   </div>

    </div>
    <Footer/>
   </div>
  )
}

export default FiltroSerie
