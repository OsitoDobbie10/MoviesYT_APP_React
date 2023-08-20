import React from 'react'
import Estrella from '../Files/estrella.png'
import '../Styles/Arreglo.css'
import {useNavigate} from 'react-router-dom'
const Item1 = (props) => {
    const {data} = props
    const {id,titulo,imagen,fecharealizada,votopopular} = data
    const navegar = useNavigate()
  return (
    <div className='item'>
        <img onClick={()=>navegar(`/Home/${id}/objeto2`)} src={imagen} alt={titulo} />
        <h2>{titulo}</h2>
        <div className='Vista'>
        <img src={Estrella} alt="Estrella" />
        <span>{votopopular}</span>
        </div>
        <span>{fecharealizada}</span>
    </div>
  )
}

export default Item1
