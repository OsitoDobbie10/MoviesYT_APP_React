import { useState, useEffect } from 'react';
import {Actor} from '../API/GetMovies';
import { useNavigate } from 'react-router-dom';
import '../Styles/Actor.css';
import ScrollToTop from './ScrollToTop';
import Spinner from './Spinner';
import CallContext from '../CustomHooks/CallContext';
import Estrella from '../Files/estrella.png';
import Footer from './Footer';

const Actores = () => {
  const [preview,setPreview] = useState(true);
  const { actores,setActores,pageActor,setPageActor} = CallContext();
  const nav = useNavigate();
  useEffect(()=>{
    Actor()
    .then((gisactor)=>{
      setActores(gisactor);
    })
  },[])
  const changePageactor = ()=>{
    setPageActor(prevStade=>prevStade + 1)
  }
  setTimeout(()=>{
    setPreview(false);
  },3000)
  if (preview) return <Spinner/>
  return (
    <div className='ActorsMain'>
     <ScrollToTop/>
     <div className="headeractors">
      <h1>Actores y directores de peliculas</h1>
     </div>
     <main className='Actores'>
      <ul className='listado'>
        {
          actores.map((actor)=>{
            return <li key={actor.id} className='lista2'>
                    <img onClick={()=>nav(`/Actors/${actor.id}/objeto`)}
                    src={actor.imagen} alt={actor.nombre} />
                    <h2>{actor.nombre}</h2>
                        <div className='movie-star2'>
                        <img 
                        src={Estrella} alt="Estrella" />
                        <span>{actor.popular}</span>
                        </div>
                  </li>
          })
        }
      </ul>

     </main>
      
      <Footer/>
    </div>
  )
}

export default Actores
