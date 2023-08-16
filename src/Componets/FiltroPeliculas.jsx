import React from 'react'
import {useParams, useNavigate } from 'react-router-dom'
import CallContext from '../CustomHooks/CallContext';
import {FaFilm} from 'react-icons/fa'
import '../Styles/GetMovieHouse.css'
import Estrellita from '../Files/estrella.png'
import Footer from '../Componets/Footer'
import { ArrayMovies } from './ArrayMovies';
import VideoView from '../CustomHooks/VideoView'
import CustomPeliculas from '../CustomHooks/CustomPeliculas';
const FiltroPeliculas = () => {
  const {searchmovies1,stade2,viewvideo,setViewvideo} = CallContext();
  const {arregleAllMovies} = CustomPeliculas();
  const Paramsmovie = useParams();
  const getUser = (id)=>{
    return arregleAllMovies.find((value)=>value.id === id)
  }
  const usermovie = getUser(parseInt(Paramsmovie.moviesId))
  const BackPelis = useNavigate();
  const Visibilty = ()=>{
    setViewvideo(!viewvideo)
  }
  const {id,imagen,titulo,resumen,fecharealizada,votopopular} = usermovie
  return (
    <div className='FiltroHOME'>
      {
        stade2 && <ArrayMovies movies={searchmovies1}/>
      }
    <div className='mb-8 flex gap-2 ml-5 justify-center'>
   <FaFilm className='text-7xl text-red-700'/>
   <h1 className='color font-bold text-4xl mt-3'>Consulta de peliculas</h1>
    </div>
    <button className='Boton' onClick={()=>BackPelis('/Movies')}>Peliculas</button>
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
   <button
   onClick={Visibilty} 
   className='VerTrailer'>Ver Trailer</button>
   </div>
   </div>
   {
     viewvideo && <VideoView id={id}/>
   }
    <Footer/>
   </div>
  
  )
}

export default FiltroPeliculas
