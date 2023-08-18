import {Swiper,SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function App(){

    return(
    

<Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}

      style={{width:"80%" , height:"500px"}}
    >
      <SwiperSlide style={{width:"100%" , height:"100%" }}>
     <img src="photo1.jpg" alt="" style={{width:"100%"}}  />
        </SwiperSlide>
      <SwiperSlide>
       <img src="photo2.jpg" alt=""  style={{width:"100%"}}/>
        </SwiperSlide>
      <SwiperSlide>
        <img src="photo3.jpg" alt="" style={{width:"100%"}} />
        </SwiperSlide>
      <SwiperSlide> <img src="photo1.jpg" alt="" style={{width:"100%"}} />
      </SwiperSlide>
      ...
    </Swiper>
    )
}