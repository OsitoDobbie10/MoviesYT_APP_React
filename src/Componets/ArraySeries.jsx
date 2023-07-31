import { useNavigate } from "react-router-dom";
import '../Styles/ArrayMovies.css';
import {FaXmark} from 'react-icons/fa6'
import CallContext from "../CustomHooks/CallContext";
const ListSeries = ({series})=>{
    const navegar = useNavigate();
    const {ShowResults} = CallContext();
    const funcion = ()=>{
    navegar(`/Home/${data.id}/objeto5`);
    }
    return (
        <div className="Arreglo-Movies-Search">
        <FaXmark className='cerrarVista' onClick={ShowResults}/>
            <ul className="lista-search">
                {
                    series.map((data)=>{
                        return <li 
                                key={data.id} 
                                className="li-search" 
                                onClick={()=>{
                                    navegar(`/Home/${data.id}/objeto6`);
                                    ShowResults();
                                    }}>
                                {data.titulo2}
                               </li>
                    })
                }
            </ul>

        </div>
    )
}

const ErrorMovies = ()=>{
    const {ShowResults} = CallContext();
    return (
        <div className="ErrorFind">
        <FaXmark className='cerrarVista2' onClick={ShowResults}/>
        <h1>No se encontraron Series....</h1>
        </div>
    )
}

export function ArrayMovies ({ series }) {
    const hasMovies = series?.length > 0
  
    return (
      hasMovies
        ? <ListSeries series={series} />
        : <ErrorMovies />
    )
  }

