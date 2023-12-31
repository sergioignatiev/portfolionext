'use client'
import React from 'react'
import { Hovers } from './hovers'
import { H } from './hovers'
const Percentage = ({name,n1,hovers,group=true}
  :{name:string,n1:number,group?:boolean,hovers?:H[]}) => {

  
  return (
    <div className={`text-white flex w-full ${group?"group":""}   mt-[20px]  `}>
    <p className="2xl:text-[20px] text-[15px] pr-[20px] xl:w-[104px] w-40% ">{name}</p>
    <Hovers hovers={hovers}/>
    
<div className="  group-hover:invisible absolute ml-[100px]  2xl:w-[565px] xl:w-[400px] lg:w-[250px]  w-[60%]">

<div className=" 2xl:w-[565px] w-[100%]  relative">

      <div style={{width:`${n1}%`}} className=' absolute bg-[white] text-[10px] 2xl:text-[17px]
       rounded-[21px] text-[black] text-right pr-[20px] pt-[3px] 2xl:h-[27px] h-[17px]'>{n1}%</div>
<div className="w-[100%] bg-[#333333]  rounded-[21px] 
text-right pr-[2px] pt-[3px] text-[grey] 2xl:h-[27px] h-[17px] text-[10px] 2xl:text-[17px]
">100%</div>

</div>

</div>

</div>
  )
}

export {Percentage}