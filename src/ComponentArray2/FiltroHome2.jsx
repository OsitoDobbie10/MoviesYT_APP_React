import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import CallContext from '../CustomHooks/CallContext'
import {FaFilm} from 'react-icons/fa'
import '../Styles/GetMovieHouse.css'
import Estrellita from '../Files/estrella.png'
import { ArrayMovies } from '../Componets/ArrayMovies'
import VideoView from '../CustomHooks/VideoView'
import Footer from '../Componets/Footer'
const FiltroHome2 = () => {
    const {peliculas2,searchmovies1,stade2,viewvideo,setViewvideo} = CallContext();
    const Params2 = useParams();
    const Back2 = useNavigate();
    const getUser = (id)=>{
        return peliculas2.find((user)=>user.id === id);
      }
    const user = getUser(parseInt(Params2.homeId))
    const Visibilty = ()=>{
      setViewvideo(!viewvideo)
    }
    const {id,fecharealizada,imagen,resumen,titulo,votopopular} = user;
    //Peliculas 2
  return (
    <div className='FiltroHOME'>
      {
         stade2 && <ArrayMovies movies={searchmovies1}/>
      }
    <div className=' mb-8 flex gap-2 ml-5 justify-center'>
   <FaFilm className='text-7xl text-red-700'/>
   <h1 className='color font-bold text-4xl mt-3'>Consulta de peliculas</h1>
    </div>
    <button className='Boton' onClick={()=>Back2('/')}>Inicio</button>
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

export default FiltroHome2
