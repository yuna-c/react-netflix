import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// 'npm i sass'를 통해 SASS를 설치한 후 scss를 가져온다.
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade, A11y } from "swiper/core";

// modules styles
import 'swiper/css';
import 'swiper/css/bundle';
// 번들러를 가져오면 필요 하지 않음
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
// Naviagtion 모듈을 사용하기 위해 SwiperCore를 가져와 설치해준다.

function ImageSlider(props) { //props
  return (
    <Swiper 
        navigation={true}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[EffectFade, A11y]} effect="fade"	
        // modules={[EffectFade, A11y]} effect="fade"	
        // A11y 있으면 하나씩 밖에 안나옴
        // autoplay={{ delay: 1000 }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide>
            <img src="https://via.placeholder.com/2560x300" alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://via.placeholder.com/2560x300/000000" alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://via.placeholder.com/2560x300" alt="slide" />
        </SwiperSlide>
    </Swiper>
  );
}
export default ImageSlider;