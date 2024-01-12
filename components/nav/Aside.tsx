'use client'
import { IoIosClose } from "react-icons/io";
import Link from "next/link";
const Aside = ({toggle,sw}:{toggle:boolean,sw:()=>void}) => {
  return (
    <div  style={{left:toggle?"-1500px":'0px'}} className='transition-all duration-1000 absolute bg-[grey] w-full  h-[100vh]'>
<div onClick={sw} className="w-[70px] h-[70px] border-[#e9e9e9] border-b-[1px] border-r-[1px]"><IoIosClose className="text-[70px]"/></div>
<Link onClick={sw} href="/"><div className="ml-[20px] mt-[30px] text-[20px]">Главная</div></Link>
<Link onClick={sw} href="/projects"><div className="ml-[20px] mt-[30px] text-[20px]">Проекты</div></Link>
<Link onClick={sw} href="/skills"><div className="ml-[20px] mt-[30px] text-[20px]">Навыки</div></Link>
    </div>
  )
}

export default Aside