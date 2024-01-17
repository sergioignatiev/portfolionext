import React from 'react'
import Link from 'next/link'
import { texts } from '../text'
let btn:string='w-full font-bold rounded-[8px]  h-[32px] flex items-center justify-center px-[36px] text-[12px] ' 
const Mainmobile = () => {
 
  return (
    <div className=" bg-[#1f1f1f] text-[#e9e9e9] py-[120px]    mt-0">
<div className="pl-[20px] pb-[16px]">
<h2 className=' text-[16px]'>Фронтенд разработчик</h2>
<h1 className='text-[36px] font-bold'>Сергей Игнатьев</h1>
</div>
<img src="/photo.png" alt="me" className='' />

<div className="pl-[36px] pr-[18px] ">
{texts.map(t=><div className='text-[12px] mt-[20px] text-[#e9e9e9]' key={t.id}>{t.text}</div>)}</div>
    <div className="flex justify-center mt-[20px] px-[55px]">
      <Link className={`${btn} text-[#1f1f1f] bg-[#e9e9e9]`} href='/projects'>Проекты</Link>
      <Link className={`${btn} border-[1px] border-[#e9e9e9] text-[#e9e9e9] ml-[20px]`} href='/skills'>Навыки</Link>
    </div>
    <Link className='underline justify-center mt-[21px] text-[12px] font-bold flex w-[100%]' href='https://sergioignatiev.github.io/cv/cv.pdf' target='_blank'>Скачать резюме</Link>
  
    </div>
    
  )
}

export {Mainmobile}