import React, { useState } from 'react'
//import { useEffect } from 'react';
//import { GetAllMovies } from '../API/GetMovies';
import Estrella from '../Files/emoticon.png'
import Spinner from '../Componets/Spinner';
import '../Styles/PeliculasAll.css'
import { useNavigate } from 'react-router-dom';
const PeliculasAll = (props) => {
 const {movies1,loading,changepage} = props;
 const navegar2 = useNavigate();
  return (
    <div className='main' id='ContenedorMovies'>
      <ul className='listado'> 
            {
                 movies1.map((movie)=>{
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
                        </li>})
            }  
      </ul>
   <button className='block mx-auto mb-2  px-3 py-2 bg-orange-300 text-white hover:text-black' 
      onClick={changepage}>Ver mas resultados</button>
 </div>
  )
}

export default PeliculasAll