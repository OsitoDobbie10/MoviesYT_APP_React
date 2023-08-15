import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import CallContext from '../CustomHooks/CallContext'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import Estrellita from '../Files/estrella.png'
import {FaFilm} from 'react-icons/fa'
import '../Styles/StyleFiltroPerson.css'

export const FiltroPerson = () => {
  const {actores} =  CallContext();
  const params = useParams();
  const navegaractor = useNavigate();
  const getUser = (id)=>{
    return actores.find((user)=>user.id === id);
  }
const actors = getUser(parseInt(params.personId))
const {nombre,imagen,popular,genero,Arreglo} = actors;
  return (
    <div>
      <ScrollToTop/>
      <div className='relative w-ful bg-slate-800 text-white'>
      <div className='mb-8 flex gap-2 ml-5 justify-center'>
      <FaFilm className='text-7xl text-red-700'/>
      <h1 className='color font-bold text-4xl mt-3'>Consulta de peliculas</h1>
      </div>
      <button className='color p-3 text-white text-xl bg-blue-500 absolute right-4 top-5 rounded-xl' 
      onClick={()=>navegaractor('/Actors')}>Actores</button>
      <div className="FiltroHomeactores">
       <div className="lado1">
       <div className='Imagen-Banner'>
       <img src={imagen} alt={nombre} />
       </div>
       <div className='Datos-actor'>
       <h1>{nombre}</h1>
       <h2>Genere: {genero}</h2>
       <div className='puntuacion'>
       <img src={Estrellita} alt="Voto" />  
       <span>{popular}</span>
       </div>
       </div>
       </div>
       <div className="peliculas">
        <h2>Conocida por peliculas como</h2>
       <ul className='arreglomovies'>
        {
          Arreglo.map((d)=>{
            return <li className='item-actor' key={d.id}>
                   <img src={`https://image.tmdb.org/t/p/w300/${d.poster_path}`} alt={d.title} />
                   <h1>{d.title}</h1>
                   </li>
          })
        }
       </ul>
       </div>
       </div>
       </div>
      <Footer/>
    </div>
  )
}
