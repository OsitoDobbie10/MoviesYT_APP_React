import {NavLink,Outlet,useLocation} from 'react-router-dom'
import {FaFilm} from 'react-icons/fa'
import {FaAlignJustify} from 'react-icons/fa'
import {FaXmark} from 'react-icons/fa6'
import {FaSistrix} from 'react-icons/fa6'
import { useState } from 'react'
import '../Styles/Layaout.css'
import CallContext from '../CustomHooks/CallContext'
import CustomSearch from '../ComponentsSearch/CustomSearch'
import Spinner from './Spinner'
import { useCallback } from 'react'
import { GetMoviesArray } from '../ComponentsSearch/GetMoviesArray'
import { ArrayMovies } from './ArrayMovies'
import debounce from 'just-debounce-it'

const Layaout = () => {
  const rutas = ['/','/Movies','/TV','/Actors']
  const location = useLocation();
  const mobile = window.innerWidth <= 768 ? true: false;
  const [stade,setStade] =  useState(false);
  const [time,setTime] = useState(true);
  const {searchmovies1,searchmovies2,setSearchmovies2,stade2,setStade2,ShowResults} = CallContext();
  const {getmovies} = GetMoviesArray({searchmovies2});
  setTimeout(()=>{
    setTime(false)
  },3500)
  const change = ()=>{
    setStade(true);
  }
  const close = ()=>{
    setStade(false);
  }
  //console.log(searchmovies1)
  const debouncedGetMovies = useCallback(
    debounce(search => {
      console.log('search', search)
      getmovies({ search })
    }, 300)
    , [getmovies]
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    getmovies({ search })
  }


  //funcion y metodo para al escribir busque la pelicula
  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearchmovies2(newSearch)
    debouncedGetMovies(newSearch)
  }

  return (
    <div>
     {
      mobile === true && stade === false ?
      <div className="mobile">
        <div className='icono'>
        <FaAlignJustify onClick={change} style={{border: '1px solid white'}}/>
        </div>
        <div className='flex gap-1'>
        <FaSistrix className=' text-yellow-400 mt-4 text-base'/>
        <input 
        value={searchmovies2}
        onChange={handleChange}
        className='flex items-center w-15 justify-center outline-none h-6 bg-transparent text-yellow-300 text-sm md:w-12 mt-3 rounded border-inherit mb-3 border-solid'
        type="text"
        placeholder='Buscar Peliculas'/>
        </div>
        <button
        onClick={ShowResults}
        className='h-8 text-white bg-red-700 font-bold mt-2 mr-2 hover:bg-red-500'>
        Resultados
        </button>
      </div>
      :
     <div className='w-12/12 text-white m-auto h-15 flex justify-between bg-gray-900'>
     <div className='data'>
     <div className='font-sans flex gap-3 items-center mt-2'>
        <div className=' text-red-600 text-4xl'>
        <FaFilm/>
        </div>
        <h2 className='mt-2'>Peliculas.TY APP</h2>
      </div>
     </div>
      <div className='datos'>
        <nav className='cabezara'>
          <FaXmark className='cerrar' onClick={close}/> 
          <NavLink to={'/'} 
           className={`${location.pathname === rutas[0] ? 'text-yellow-300' : 'text-white'} block text-xl mt-3 hover:text-blue-400'`}>Incio</NavLink>
           <NavLink to={rutas[1]} 
           className={`${location.pathname === rutas[1] ? 'text-yellow-300' : 'text-white'} block text-xl mt-3 hover:text-blue-400'`}>Peliculas</NavLink>
           <NavLink to={rutas[2]} 
           className={`${location.pathname === rutas[2] ? 'text-yellow-300' : 'text-white'} block text-xl mt-3 hover:text-blue-400'`}>TVseries</NavLink>
        </nav>
        <div className='input'>
        <FaSistrix className=' text-yellow-400 mt-4 text-base'/>
        <input 
        value={searchmovies2}
        onChange={handleChange}
        className='flex items-center w-18 justify-center outline-none h-8 text-yellow-200 bg-transparent text-sm  mt-3 rounded border-inherit'
        type="text"
        placeholder='Buscar Peliculas'/>
        <button
        onClick={ShowResults}
        className='h-8 text-white bg-red-700 font-bold mt-3 mr-2 hover:bg-red-500'>
        Resultados
        </button>
        </div>
      </div>

    </div>
     }
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layaout
