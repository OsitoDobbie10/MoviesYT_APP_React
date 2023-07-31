import CallContext from './CallContext'
import { useState, useEffect } from 'react'
import { GetAllMovies } from "../API/GetMovies";

const CustomPeliculas = () => {
    const {arregleAllMovies,
          setArregleAllMovies,
           arreglogenres,
           PaginaMovies,
           setPaginaMovies} = CallContext();
    const [arreglofilter,setArreglofilter] = useState(arregleAllMovies);
    const [cambiarfiltro,setCambiarfiltro] = useState(true);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        GetAllMovies(PaginaMovies)
        .then((gis2)=>{
          const gisnew = gis2.filter((value,index)=>gis2.indexOf(value) === index);
          setArregleAllMovies([...arregleAllMovies,...gisnew]);
          setLoading(false);
        })
      },[PaginaMovies])
      const Handlescroll = ()=>{
        let height = document.documentElement.scrollHeight;
        let top = document.documentElement.scrollTop;
        let winndow = window.innerHeight;
       if(top + winndow + 1 >= height){
        setLoading(true);
        setPaginaMovies(prevState => prevState + 1);
       }
      
      }
      useEffect(()=>{
        window.addEventListener('scroll',Handlescroll)
      },[])
      
      const FilterMovies = (id)=>{
        const arreglofilter = arregleAllMovies.filter((data)=>data.generos.includes(id))
        setArreglofilter(arreglofilter)
       }
       const ChangeValue = ()=>{
        setCambiarfiltro(false);
        }

  return{arregleAllMovies,arreglofilter,arreglogenres,cambiarfiltro,FilterMovies,ChangeValue,loading}
}

export default CustomPeliculas
