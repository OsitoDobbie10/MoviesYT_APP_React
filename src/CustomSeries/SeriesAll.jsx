import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/Series.css';
import Estrella from '../Files/estrella.png';

const SeriesAll = (props) => {
    const {series1,series2,condicion} = props
    const naveg = useNavigate();
  return (
    <div className='main2' id='ContenedorMovies2'>
    <ul className='listado'>
          {
              condicion ? series1.map((movie)=>{
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
            }):
            series2.map((movie)=>{
              return <li className='lista2' key={movie.id}>
                      <img
                      onClick={()=>naveg(`/TV/${movie.id}/objeto`)}
                      src={movie.imagen}
                      alt={movie.idx} 
                      className='block m-auto'/>
                      <h2>{movie.titulo}</h2>
                      <div className='movie-star2'>
                      <img src={Estrella} alt="" />
                      <span>{movie.votopopular}</span>
                      </div>
                      <h2>{movie.fecharealizada}</h2>
                    </li>
          })
          }
</ul>
    
  </div>
  )
}

export default SeriesAll
