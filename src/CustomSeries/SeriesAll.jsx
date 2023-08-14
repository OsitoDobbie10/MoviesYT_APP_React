import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/Series.css';
import Estrella from '../Files/estrella.png';

const SeriesAll = (props) => {
    const {series1,changeseries} = props
    const naveg = useNavigate();
  return (
    <div className='main2' id='ContenedorMovies2'>
    <ul className='listado'>
          {
              series1.map((movie)=>{
                return <li className='lista2' key={movie.id}>
                        <img
                        onClick={()=>naveg(`/TV/${movie.id}/objeto`)}
                        src={movie.imagen}
                        alt={movie.idx} />
                        <h2>{movie.titulo}</h2>
                        <div className='movie-star2'>
                        <img src={Estrella} alt="Estrella" />
                        <span>{movie.votopopular}</span>
                        </div>
                        <h2>Estreno: {movie.fecharealizada}</h2>
                      </li>
            })
          }
    </ul>
    <button className='block mx-auto mb-3  px-3 py-2 bg-orange-300 text-white hover:text-black' 
                    onClick={changeseries}>Ver mas resultados</button>
  </div>
  )
}

export default SeriesAll
