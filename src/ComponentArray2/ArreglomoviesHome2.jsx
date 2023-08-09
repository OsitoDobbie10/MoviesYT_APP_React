import React from 'react'
import '../Styles/Arreglo.css'
import Item2 from '../ComponentArray2/Item2'
const ArregloMoviesHome2 = (props) => {
    const {peliculas} = props
  return (
    <div className='Arreglo'>
        {
            peliculas.slice(0, 5).map((gis)=>{
                return <Item2 
                        key={gis.id}
                        data={gis}/>
            })
        }
    </div>
  )
}

export default ArregloMoviesHome2
