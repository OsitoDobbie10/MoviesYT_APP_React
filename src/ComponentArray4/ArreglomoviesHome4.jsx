import React from 'react'
import '../Styles/Arreglo.css'
import Item4 from '../ComponentArray4/Item4';
const ArregloMoviesHome4 = (props) => {
    const {peliculas} = props
  return (
    <div className='Arreglo'>
        {
            peliculas.slice(0, 15).map((gis)=>{
                return <Item4 
                        key={gis.id}
                        data={gis}/>
            })
        }
    </div>
  )
}

export default ArregloMoviesHome4
