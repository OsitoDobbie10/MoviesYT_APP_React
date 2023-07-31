import React from 'react'
import '../Styles/Arreglo.css'
import Item3 from '../ComponentArray3/Item3';
const ArregloMoviesHome3 = (props) => {
    const {peliculas} = props
  return (
    <div className='Arreglo'>
        {
            peliculas.slice(0, 15).map((gis)=>{
                return <Item3 
                        key={gis.id}
                        data={gis}/>
            })
        }
    </div>
  )
}

export default ArregloMoviesHome3
