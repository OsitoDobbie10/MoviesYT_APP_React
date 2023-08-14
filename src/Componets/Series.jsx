//import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom'
import Footer from './Footer'
import SeriesHooks from '../CustomHooks/SeriesHooks';
import { GetTVranted } from '../API/GetMovies';
import Emoticon from '../Files/emoticon.png';
import '../Styles/Series.css';
import SeriesAll from '../CustomSeries/SeriesAll';
import CallContext from '../CustomHooks/CallContext';
import ScrollToTop from './ScrollToTop';
import { useState } from 'react';
import Spinner from './Spinner';
import { ArrayMovies } from './ArrayMovies';
const Series = () => {
  const [mostrarseries,setMostrarseries] = useState(true);
  const arreglogenres2 = useLoaderData();
  const {searchmovies1,stade2} = CallContext();
  const {seriesTv,tvarregloCopia,changeserie,ChangeSerieF,FiltrarSerie,changeseries} = SeriesHooks();
  setTimeout(()=>{
    setMostrarseries(false)
  },3000)
  const botonesseries = [...arreglogenres2]; 
  const objeto = {id: 1, name: 'Todos'};
  const botonseriesNew = botonesseries.concat(objeto)
  if (mostrarseries) return <Spinner/>
  return (
    <div className='Container-TV'>
      {
        stade2 && <ArrayMovies movies={searchmovies1}/>
      }
      <ScrollToTop/>
      <div className='Header-Tv'>
        <h1>Filtro de generos de TV series</h1>
        <ul className='Lista-Botones'>
          {
            botonseriesNew.map((data)=>{
              return  <li key={data.id}>
                       <button 
                       onClick={()=>FiltrarSerie(data.id)}
                       onDoubleClick={ChangeSerieF}
                       className='Botones-lista'>{data.name}</button>
                      </li>
            })
          }
          <img className='Emoticon' src={Emoticon} alt="Emoticon" />
        </ul>

      </div>
      <section className="Contenedor">
      <SeriesAll 
      series1={seriesTv}
      //series2={tvarregloCopia}
      //condicion={changeserie}
      changeseries={changeseries}
      />
      </section>
      <Footer/>
    </div>
  )
}

export default Series
