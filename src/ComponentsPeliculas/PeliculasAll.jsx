import React, { useState } from 'react'
//import { useEffect } from 'react';
//import { GetAllMovies } from '../API/GetMovies';
import Estrella from '../Files/emoticon.png'
import Spinner from '../Componets/Spinner';
import '../Styles/PeliculasAll.css'
import { useNavigate } from 'react-router-dom';
const PeliculasAll = (props) => {
 const {movies1,movies2,condicion,loading,changepage} = props;
 const navegar2 = useNavigate();
  return (
    <div className='main' id='ContenedorMovies'>
      <ul className='listado'>
            {
                condicion ? movies1.map((movie)=>{
                  return <li className='lista-movie' key={movie.id}>
                          <img 
                          onClick={()=>navegar2(`/Movies/${movie.id}/objeto`)}
                          src={movie.imagen}
                          alt={movie.idx} />
                          <h2>{movie.titulo}</h2>
                          <div className='movie-star'>
                          <img src={Estrella} alt="Estrella" />
                          <span>{movie.votopopular}</span>
                          </div>
                          <h2>{movie.fecharealizada}</h2>
                        </li>}):
              movies2.map((movie)=>{
                return <li className='lista-movie' key={movie.id}>
                        <img
                        onClick={()=>navegar2(`/Movies/${movie.id}/objeto`)}
                        src={movie.imagen}
                        alt={movie.idx}
                        className='block m-auto' />
                        <h2>{movie.titulo}</h2>
                        <div className='flex justify-center gap-2'>
                        <img src={Estrella} alt="Estrella" className='w-2 h-2 mt-1'/>
                        <span className='font-bold'>{movie.votopopular}</span>
                        </div>
                        <h1 className='text-center font-bold'>{movie.fecharealizada}</h1>
                      </li>
            })
            }  
      </ul>
      <button
             className='block mx-auto mb-2  px-3 py-2 bg-orange-300 text-white hover:text-black' 
             onClick={changepage}>Ver mas resultados</button>
 </div>
  )
}

export default PeliculasAll
