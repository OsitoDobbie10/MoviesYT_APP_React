import React from 'react'
import '../Styles/Footer.css'
import {FaFacebookF} from 'react-icons/fa6'
import {FaInstagram} from 'react-icons/fa6'
import {FaSquareTwitter} from 'react-icons/fa6'
import {FaGithub} from 'react-icons/fa6'
const Footer = () => {
    const array1 = ['Sobre Nosotros','Contacto','Foros de ayuda','Estado del sistema']
    const array2 = ['Guia de aportaciones','Añadir nueva pelicula','Añadir nueva serie de TV ']
    const array3 = ['Directrises','Discusiones','Twitter']
    const array4 = ['Terminos de uso','terminos de uso API','Politica de privacidad']
  return (
    <footer>
     <div className='footer'>
     <div className='lista'>
            <h2>LO BASICO</h2>
            <ul>
                {
                    array1.map((lista,index)=>{
                        return <li key={index}>
                              <a className='nav' href="#">{lista}</a>
                               </li>
                    })
                }
            </ul>
        </div>
        <div className='lista'>
        <h2>PARTICIPA</h2>
        <ul>
                {
                    array2.map((lista2,index2)=>{
                        return <li key={index2}>
                              <a className='nav' href="#">{lista2}</a>
                               </li>
                    })
                }
            </ul>

        </div>
        <div className='lista'>
        <h2>COMUNIDAD</h2>
        <ul>
                {
                    array3.map((lista3,index3)=>{
                        return <li key={index3}>
                              <a className='nav' href="#">{lista3}</a>
                               </li>
                    })
                }
            </ul>

        </div>
        <div className='lista'>
        <h2>LEGAL</h2>
        <ul>
                {
                    array4.map((lista4,index4)=>{
                        return <li key={index4}>
                               <a className='nav' href="#">{lista4}</a>
                               </li>
                    })
                }
            </ul>
        </div>
     </div>
     <div className="redes">
     <a href="https://www.facebook.com/osito.dobbie.9"><FaFacebookF/></a>
     <a href="https://www.instagram.com/carlos_cabina10/"><FaInstagram/></a>
     <a href="#"><FaSquareTwitter/></a>
    <a href="https://github.com/OsitoDobbie10"><FaGithub/></a>
     </div>
     <h1 style={{textAlign:'center', fontWeight:'bold', fontSize:'20px'}}>Hecho: Carlos Archaga</h1>
     <h2 style={{textAlign:'center', fontWeight:'bold', fontSize:'20px'}}>Analista GIS y front end developer React</h2>
    </footer>
  )
}

export default Footer
