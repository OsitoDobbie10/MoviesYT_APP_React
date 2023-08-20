import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

const Swiper = (props) => {
    const {arreglo} = props;
  return (
    <div className="container">
    <div className="swiperContainer">
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        pagination={{
          el: ".pagination",
          clickable: true,
        }}
        slidesPerView={5}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 25,
          },
          "@0.50": {
            slidesPerView: 1.25,
            spaceBetween: 25,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          "@1.25": {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          "@1.75": {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {arreglo?.map((pokemon) => (
          <SwiperSlide key={arreglo.id}>
            <Card url={arreglo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div className="pagination">
    </div>    
    </div>
  )
}

export default Swiper
