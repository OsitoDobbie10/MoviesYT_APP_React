import { useState, useEffect } from 'react';
import CallContext from './CallContext'
import { GetTVranted } from '../API/GetMovies';
const SeriesHooks = () => {
    const {seriesTv,
        setSeriesTv,
        paginaseries,
        setPaginaseries} = CallContext();
      const [tvarregloCopia,setTvarregloCopia] = useState(seriesTv);
      const [loadingTv,setLoadingTv] = useState(true);
      const [changeserie,setChangeserie] = useState(true);
      useEffect(()=>{
        GetTVranted(paginaseries)
        .then((response)=>{
          const gisnew = response.filter((value,index)=>response.indexOf(value) === index);
          setSeriesTv([...seriesTv,...gisnew])
          setLoadingTv(false);
        })
      },[paginaseries])

      const HandleTv = ()=>{
        let height = document.documentElement.scrollHeight;
        let top = document.documentElement.scrollTop;
        let winndow = window.innerHeight;
        if(top + winndow + 1 >= height){
            setLoadingTv(true);
            setPaginaseries(prevState=> prevState + 1);
        }
       }
    
       useEffect(()=>{
        window.addEventListener('scroll',HandleTv)
       },[])
    
       const ChangeSerieF = ()=>{
        setChangeserie(false);
        }
        const FiltrarSerie = (id)=>{
            const seriefilter = seriesTv.filter((tv)=>tv.generos.includes(id)); 
            setTvarregloCopia(seriefilter);
    
        }
  return {seriesTv,tvarregloCopia,changeserie,ChangeSerieF,FiltrarSerie} 

}

export default SeriesHooks
