'use client'
import React from 'react'
import { Hovers } from './hovers'
import { H } from './hovers'
const Percentage = ({name,n1,hovers}:{name:string,n1:number,hovers:H[]}) => {
  
  return (
    <div className="text-white flex group mt-7">
    <p className="text-[20px] mr-[20px] w-[104px]">{name}</p>
    <Hovers hovers={hovers}/>
<div className="  group-hover:invisible absolute ml-[100px]">

<div className="  w-[565px] relative">

      <div style={{width:`${n1}%`}} className={`  absolute bg-[white] 
       rounded-[21px] text-[black] text-right pr-[20px] pt-[4px]`}>{n1}%</div>
<div className="w-[100%] bg-[#333333] h-[30px] rounded-[21px] text-right pr-[2px] pt-[4px] text-[grey]">100%</div>

</div>

</div>

</div>
  )
}

export {Percentage}