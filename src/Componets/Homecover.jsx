import Cover1 from '../Files/PeliculaCover.png';
import Cover2 from '../Files/PeliculaCover2.png';
import '../Styles/Cover.css'

const Homecover = () => {
  
  return (
    <div className='cover'>
    <div className="image1">
    <img src={Cover1} alt="Cover1" />
    </div>
    <div className="image2">
    <img src={Cover2} alt="cover2" />
    </div>
    <div className='CONTENIDO'>
    <h1 className=' font-bold text-white text-5xl text-center animate-fade animate-twice animate-ease-in-out'>Aplicacion de consulta de peliculas</h1>
    <h2 className='font-bold text-white text-4xl text-center animate-fade animate-twice animate-ease-in-out'>Usando la API de Peliculas YT</h2>  
    </div>
    </div>
  )
}

export default Homecover
