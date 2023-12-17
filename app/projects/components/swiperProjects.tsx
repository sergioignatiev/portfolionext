'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import { SwiperUnit } from './swiperUnit';

export default function SwiperProjects() {
  return (
    <>
<div className="prev "><svg xmlns="http://www.w3.org/2000/svg" width="44" height="35" viewBox="0 0 44 35" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5799 34.1318L0.961592 16.9299L15.548 0.616137L24.7212 0.965316L13.1231 14.098L43.0595 14.8829L42.8105 21.4251L12.7875 20.6376L24.7435 34.4806L15.5799 34.1318Z" fill="#E9E9E9"/>
</svg>
</div>
<div className="next ">
<svg xmlns="http://www.w3.org/2000/svg" width="43" height="35" viewBox="0 0 43 35" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M26.115 0.529547L42.116 16.4534L28.9398 33.926L19.7694 34.3425L30.2327 20.2889L0.335128 22.0016L0.0380828 15.4614L30.0222 13.7441L16.9541 0.945656L26.115 0.529547Z" fill="#E9E9E9"/>
</svg>
</div>
      <Swiper  modules={[Navigation]}
      navigation={{
        prevEl: '.prev',
        nextEl: '.next',
      }}
     autoplay={true}>

        <SwiperSlide><SwiperUnit/></SwiperSlide>
        <SwiperSlide><div className="text-white text-[30px]">TWO</div></SwiperSlide>
        <SwiperSlide><div className="text-white text-[30px]">THREE</div></SwiperSlide>
        <SwiperSlide><div className="text-white text-[30px]">FOUR</div></SwiperSlide>
        <SwiperSlide><div className="text-white text-[30px]">FIVE</div></SwiperSlide>
        <SwiperSlide><div className="text-white text-[30px]">SIX</div></SwiperSlide>
        <SwiperSlide><div className="text-white text-[30px]">SEVEN</div></SwiperSlide>
        <SwiperSlide><div className="text-white text-[30px]">EIGHT</div></SwiperSlide>
      </Swiper>
    </>
  );
}
