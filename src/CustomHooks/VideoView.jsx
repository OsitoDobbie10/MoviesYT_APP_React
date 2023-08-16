import React, { useState } from 'react'
import CallContext from './CallContext'
import ReactPlayer from 'react-player/youtube'
import {FaXmark} from 'react-icons/fa6'
import { useEffect } from 'react'
import '../Styles/StyleVideo.css'


export const VideoAPI = async(url)=>{
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjU1MmYwOTZiZTg0YzhjNGQxY2JiNTUzNTQ0OWM0OCIsInN1YiI6IjY0YjhhMzRhNGQyM2RkMDEwNjk2MDYyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tgD4Z3dS5E-OYscZAemQhrKTUi8vp4WxCPpggbHfoK8'
      }
    };
   const urltube = url;
   const response = await fetch(urltube, options);
   const data = await response.json();
   const {results} = data;
   const newarray = results.map((paras)=>({
      id: paras.id,
      nombre: paras.name,
      videourl: `https://www.youtube.com/watch?v=${paras.key}`,
      sitio: paras.site 
    }));
    return newarray;
  
  }
  
const VideoView = ({id}) => {
  const {video,setVideo,viewvideo,setViewvideo} = CallContext();
  const [mobileview,setMobileview] = useState(false);
  const tamano = window.innerWidth <= 768 ? true: false;
  const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
  useEffect(()=>{
    VideoAPI(url)
    .then((view)=>{
     setVideo(view)
    })
  },[id])
  const changedview = ()=>{
    setViewvideo(!viewvideo)
  }
  return (
    <div className='VideoMain'>
        <div className='cerrarVideo'>
        <FaXmark onClick={changedview} style={{border: '1px solid white'}}/>
        </div>
        <div className="contenedor-video">
            {
              video.slice(0,1).map((d)=>{
                return <div 
                       className='vista'
                       key={d.id}>
                       <h1>Video: {d.nombre}</h1>
                       {
                        tamano === true && mobileview === false ?
                        <ReactPlayer
                       url={d.videourl}
                       playing={true}
                       controls={true}
                       width='380px'
                       height='200px'
                       />  :
                       <ReactPlayer
                       url={d.videourl}
                       playing={true}
                       controls={true}
                       width='640px'
                       height='500px'
                       />  
                       }
                      </div>
              })
            } 
        </div>
      
    </div>
  )
}

export default VideoView
