'use client'
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'



// import required modules
import { Navigation,Autoplay } from 'swiper/modules';
import { SwiperUnit } from './swiperUnit';
import NavigationUnits from './units/navigaition';

import { data } from './units/data';

export default function SwiperProjects() {

  return (
    <>

      <Swiper  modules={[Navigation,Autoplay]}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
      
      autoplay={{
        "delay": 5000,
        "disableOnInteraction": true
      }}

      slidesPerView={1.1}
  loop={true}
  className=' -z-50  '
      >

{data.map(i=><SwiperSlide key={i.id}><SwiperUnit {...i}/></SwiperSlide>)}

       
        
      </Swiper>

     
      <NavigationUnits/>
    </>
  );
}
