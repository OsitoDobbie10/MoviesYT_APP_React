import React from 'react'
import CallContext from '../CustomHooks/CallContext'
const Vista2 = (props) => {
    const {texto1,texto2,texto3} = props
    const {vista2,setVista2} = CallContext();
  return (
        <div className='flex gap-2 mt-10 mb-2 ml-2'>
        <h2 className='text-3xl'> {texto1}: </h2>
        <button 
        onClick={()=>{setVista2(true)}}
        className={`${vista2 ? 'bg-red-600 rounded-2xl border-black py-2 px-3':'bg-transparent rounded-2xl border-black py-2 px-3'}`}
        >{texto2}</button>
        <button 
        onClick={()=>{setVista2(false)}}
        className={`${vista2 ? 'bg-transparent rounded-2xl border-black py-2 px-3':'bg-red-600 rounded-2xl border-black py-2 px-3'}`}
        >{texto3}</button>
        </div>
  )
}

export default Vista2
