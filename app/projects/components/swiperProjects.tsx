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
      slidesPerView={1}
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

      <Swiper  modules={[Navigation]}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
      slidesPerView={3}
  loop={true}
  className=' -z-50  lg:visible invisible'
      >



        <SwiperSlide><div className='text-[50px] text-white font-extrabold opacity-50'>1</div></SwiperSlide>
        <SwiperSlide><div className='text-[50px] text-white font-extrabold opacity-50'>2</div></SwiperSlide>
        <SwiperSlide><div className='text-[50px] text-white font-extrabold opacity-50'>3</div></SwiperSlide>
        <SwiperSlide><div className='text-[50px] text-white font-extrabold opacity-50'>4</div></SwiperSlide>
        <SwiperSlide><div className='text-[50px] text-white font-extrabold opacity-50'>5</div></SwiperSlide>
        <SwiperSlide><div className='text-[50px] text-white font-extrabold opacity-50'>6</div></SwiperSlide>
      </Swiper>
      <NavigationUnits/>
    </>
  );
}
