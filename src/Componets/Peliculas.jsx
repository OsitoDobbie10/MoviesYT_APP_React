import Footer from "./Footer"
import CallContext from "../CustomHooks/CallContext"
import '../Styles/Peliculas.css'
import PeliculasAll from "../ComponentsPeliculas/PeliculasAll";
import { useLoaderData } from "react-router-dom";
import CustomPeliculas from "../CustomHooks/CustomPeliculas";
import Emoticon from '../Files/emoticon.png'
import ScrollToTop from "./ScrollToTop";
import { useState } from "react";
import { ArrayMovies } from "./ArrayMovies";
import Spinner from "./Spinner";
const Peliculas = () => {
const GenerosMovies = useLoaderData();
const [mostarpeliculas,setMostrarpeliculas] = useState(true)
const {searchmovies1,stade2} = CallContext();
const {arregleAllMovies,arreglofilter,cambiarfiltro,FilterMovies,ChangeValue,loading,changepage} = CustomPeliculas();
setTimeout(()=>{
  setMostrarpeliculas(false);
},3000)
if (mostarpeliculas) return <Spinner/>
  return (
    <div className="TodoPelis">
      {
        stade2 && <ArrayMovies movies={searchmovies1}/>
      }
      <ScrollToTop/>
    <div className="PELIS">
    <div className='Header-Tv2'>
        <h1>Filtro de generos de Peliculas</h1>
        <h2 
        style={{
          textAlign:'center',
          fontWeight:'bold',
          marginBottom:'10px'
        }}>Haz primero un click en el botom y luego doble click </h2>
        <ul className='Lista-Botones2'>
          {
            GenerosMovies.map((data)=>{
              return  <li key={data.id}>
                       <button 
                       onClick={()=>FilterMovies(data.id)}
                       onDoubleClick={ChangeValue}
                       className='Botones-lista2'>{data.name}</button>
                      </li>
            })
          }
          <img className='Emoticon2' src={Emoticon} alt="Emoticon" />
        </ul>
      </div>
    <section className="Contenedor">
    <PeliculasAll 
    movies1={arregleAllMovies}
    movies2={arreglofilter}
    condicion={cambiarfiltro}
    spinner={loading}
    changepage={changepage}
    />
    </section>
    </div>
    <Footer/>
    </div>
  )
}

export default Peliculas
