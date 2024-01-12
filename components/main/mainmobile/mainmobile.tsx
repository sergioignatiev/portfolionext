import React from 'react'
import { T } from '../text'
import { texts } from '../text'
const Mainmobile = () => {
  return (
    <div className=" bg-[#1f1f1f] text-[#e9e9e9] pt-[120px]   mt-0">
<div className="pl-[20px] pb-[16px]">
<h2 className=' text-[16px]'>Фронтенд разработчик</h2>
<h1 className='text-[36px] font-bold'>Сергей Игнатьев</h1>
</div>
<img src="/photo.png" alt="" />

<div className="pl-[36px] pr-[18px]">
{texts.map(t=><div className='text-[12px] mt-[20px] text-[#e9e9e9]' key={t.id}>{t.text}</div>)}</div>
    </div>
    
  )
}

export {Mainmobile}