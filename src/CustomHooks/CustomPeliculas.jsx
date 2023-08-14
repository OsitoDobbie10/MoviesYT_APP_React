import CallContext from './CallContext'
import { useState, useEffect , useMemo} from 'react'
import { GetAllMovies } from "../API/GetMovies";
import Allmovies from '../API/Allmovies';

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
        setLoading(true);
        GetAllMovies(PaginaMovies)
        .then((gis2)=>{
          const gisnew = gis2.filter((value,index)=>gis2.indexOf(value) === index);
          setArregleAllMovies([...arregleAllMovies,...gisnew]);
          setLoading(false);
        })
      },[PaginaMovies])
      /*
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
      },[])*/
      const changepage = ()=>{
        setPaginaMovies(PaginaMovies + 1);
      }
      
      const FilterMovies = (id)=>{
        if(id===1){
          setArregleAllMovies(Allmovies)
        }else{
          const arreglofilter = arregleAllMovies.filter((data)=>data.generos.includes(id))
          setArregleAllMovies(arreglofilter)
        }
        
       }
       const ChangeValue = ()=>{
        setCambiarfiltro(false);
        }
        

       
  return{arregleAllMovies,arreglofilter,arreglogenres,cambiarfiltro,FilterMovies,ChangeValue,loading,changepage}
}

export default CustomPeliculas