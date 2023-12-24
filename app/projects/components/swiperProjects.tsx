'use client'
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';




// import required modules
import { Navigation,Autoplay } from 'swiper/modules';
import { SwiperUnit } from './swiperUnit';
import NavigationUnits from './units/navigaition';


export default function SwiperProjects() {

  return (
    <>

      <Swiper  modules={[Navigation]}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
      slidesPerView={1.1}
  loop={true}
  className=' -z-50  '
      >



        <SwiperSlide><SwiperUnit number={'01'}/></SwiperSlide>
        <SwiperSlide><SwiperUnit number={'02'}/></SwiperSlide>
        <SwiperSlide><SwiperUnit number={'03'}/></SwiperSlide>
        <SwiperSlide><SwiperUnit number={'04'}/></SwiperSlide>
        <SwiperSlide><SwiperUnit number={'05'}/></SwiperSlide>
        <SwiperSlide><SwiperUnit number={'06'}/></SwiperSlide>
      </Swiper>

     
      <NavigationUnits/>
    </>
  );
}
