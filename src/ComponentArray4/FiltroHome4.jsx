import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import CallContext from '../CustomHooks/CallContext'
import {FaFilm} from 'react-icons/fa'
import '../Styles/GetMovieHouse.css'
import Estrellita from '../Files/estrella.png'
import Footer from '../Componets/Footer'
const FiltroHome2 = () => {
    const {tvRanted} = CallContext();
    const Params4 = useParams();
    const Back4 = useNavigate();
    const getUser = (id)=>{
        return tvRanted.find((user)=>user.id === id);
      }
    const user4 = getUser(parseInt(Params4.homeId))
    const {fecharealizada,imagen,resumen,titulo,votopopular} = user4;
    //Peliculas 2
  return (
    <div className='FiltroHOME'>
    <div className='mb-8 flex gap-2 ml-5 justify-center'>
   <FaFilm className='text-7xl text-red-700'/>
   <h1 className='color font-bold text-4xl mt-3'>Consulta de peliculas</h1>
    </div>
    <button className='Boton' onClick={()=>Back4('/')}>Inicio</button>
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

export default FiltroHome2
