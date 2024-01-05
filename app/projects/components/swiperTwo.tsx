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
import { SecondSwUnit } from './units/secondSwUnit';
import { data } from './units/data';
import { S } from './units/data';
export function SwiperTwo(){

    return <>
     <Swiper  modules={[Navigation,Autoplay]}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      slidesPerView={4}
      autoplay={{
        "delay": 5000,
        "disableOnInteraction": true
      }}

  loop={true}
  className=' -z-50  lg:visible invisible'
      >



       {data.map(i=><SwiperSlide key={i.id}><SecondSwUnit {...i}/></SwiperSlide>)}
        
      </Swiper>
    </>
}