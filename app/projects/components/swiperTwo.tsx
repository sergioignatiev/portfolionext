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
interface Props{
    id:string,
    name:string
}
export function SwiperTwo(){
    let arr:Props[]=[{id:"01",name:"Designer portfolio"},
{id:'02',name:"Ciclists"},
{id:'03',name:"Work5"},
{id:"01",name:"Designer portfolio"},
{id:'02',name:"Ciclists"},
{id:'03',name:"Work5"},
{id:"01",name:"Силиконовая долина"},
{id:'02',name:"Ciclists"},
{id:'03',name:"Work5"},
{id:"01",name:"Designer portfolio"},
{id:'02',name:"Ciclists"},
{id:'03',name:"Work5"},

]
    return <>
     <Swiper  modules={[Navigation,Autoplay]}
      navigation={{
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
      }}
      slidesPerView={4}
      autoplay={{
        "delay": 5000,
        "disableOnInteraction": true
      }}

  loop={true}
  className=' -z-50  lg:visible invisible'
      >



       {arr.map(i=><SwiperSlide key={i.id}><SecondSwUnit {...i}/></SwiperSlide>)}
        
      </Swiper>
    </>
}