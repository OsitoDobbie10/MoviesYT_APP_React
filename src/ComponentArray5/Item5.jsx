import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import CallContext from '../CustomHooks/CallContext'
import {FaFilm} from 'react-icons/fa'
import '../Styles/GetMovieHouse.css'
import Estrellita from '../Files/estrella.png'
import { ArrayMovies } from '../Componets/ArrayMovies'
import Footer from '../Componets/Footer'
const Item5 = () => {
  const {searchmovies1,stade2} = CallContext();
  const ParamsInicio = useParams();
  const BackHome = useNavigate();
  const getUserHOME = (id)=>{
    return searchmovies1.find((user)=>user.id === id);
  }
  const userSearch = getUserHOME(parseInt(ParamsInicio.homeId));
  const {id,imagen,resumen,titulo2,votopopular,fecharealizada} = userSearch
  return (
    <div className='FiltroHOME'>
      {
        stade2 && <ArrayMovies movies={searchmovies1}/>
      }
    <div className=' mb-8 flex gap-2 ml-5 justify-center'>
   <FaFilm className='text-7xl text-red-700'/>
   <h1 className='color font-bold text-4xl mt-3'>Consulta de peliculas</h1>
    </div>
    <button className='Boton' onClick={()=>BackHome('/')}>Inicio</button>
   <div className="FiltroHomePeliculas">
   <div className='Imagen-Banner'>
   <img src={imagen} alt={titulo2} />
   </div>
   <div className='Datos-home'>
   <h1>{titulo2}</h1>
   <h2>Resumen</h2>
   <p>{resumen}</p>
   <h2>Estreno: {fecharealizada}</h2>
   <div className='puntuacion'>
   <img src={Estrellita} alt="Voto" />  
   <span>{votopopular}</span>
   </div>
   <span>Titulo Original</span>
   <h3>{titulo2}</h3>
   <button className='VerTrailer'>Ver Trailer</button>
   </div>
    </div>
    <Footer/>
   </div>
  )
}

export default Item5