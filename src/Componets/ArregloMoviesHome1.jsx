import React from 'react'
import '../Styles/Arreglo.css'
import Item from './Item'
const ArregloMoviesHome1 = (props) => {
    const {peliculas} = props
  return (
    <div className='Arreglo'>
        {
            peliculas.slice(0, 5).map((gis)=>{
                return <Item 
                        key={gis.id}
                        data={gis}/>
            })
        }
    </div>
  )
}

export default ArregloMoviesHome1
