import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y,EffectCube} from 'swiper/modules';
import Covermovies from '../API/Covermovies'
import '../Styles/Cover.css';
import 'swiper/css';
import 'swiper/swiper-bundle.css'
import 'swiper/css/effect-cube';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Homecover = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y,EffectCube]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      effect={"cube"}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
    >
      {
        Covermovies.map((swiper)=>{
          return <SwiperSlide key={swiper.image}>
                  <div className="DatosCover">
                 <h1>Hecho por Carlos Archaga <br /> Analista GIS y desarrollador Front End</h1>
                 <img className="coverimage" src={swiper.image} alt={swiper.title} />
                 </div>
                </SwiperSlide>
        })
      }
    </Swiper>
  )
}

export default Homecover
