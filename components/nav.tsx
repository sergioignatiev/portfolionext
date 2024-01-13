'use client'
import Link from "next/link"
import classnames from 'classnames'
import { github,hh,telegram } from "./svgs"
import { usePathname } from 'next/navigation'

let arrow=<svg xmlns="http://www.w3.org/2000/svg" width="9" height="13" viewBox="0 0 9 13" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 0.0138483L7.72899 0L8.5 5.5L6.9291 7.22039L6.28481 2.82077L1.22695 8.49332L0 7.37298L5.07255 1.68406L0.430738 1.73245L2 0.0138483Z" fill="#E9E9E9"/>
</svg>
function NavUnit({children,brdr,brdrr,vis}:{children:React.ReactNode|string,brdr:boolean,brdrr:boolean,vis:boolean}){

return <div style={{borderRight:brdrr?'1px solid white':"",borderBottom:brdr?"1px solid white":""}} className={classnames({
    "":vis===true,
    'lg:flex hidden':vis!==true,
'2xl:text-[16px] text-[12px] font-bold flex \
 justify-center \
  items-center  2xl:p-[20px] p-[10px] lg:border-b-white lg:border-r-white  w-[100%]':true
  })}
   
   >{children}</div>

}

function Links({href,label}:{href:string,label:string}){
   const currentPath= usePathname()
   return <Link  href={`${href}`} className={classnames({
      'font-extrabold border-b-[#e9e9e9] border-b-[1px]':`${href}`===currentPath,
      '':`/`!==currentPath,
      ' flex items-center':true
    })}>{label} <pre> </pre> {arrow}</Link>
}

export function Nav(){

    const currentPath= usePathname()
    return <div className={classnames({
        'bg-[#222629] bg-opacity-50 ':`/`===currentPath,
        'bg-[#1f1f1f]':`/`!==currentPath,
        '  text-white left absolute z-10 flex w-full 2xl:h-[96px] pt-[10px]':true
      })}>
      
 

 <nav className="flex justify-between w-full text-[16px] ">


 
 <NavUnit brdr={true} brdrr={true} vis={true}>
   <Links href='/' label='Сергей Игнатьев'/>
 </NavUnit>
 <NavUnit brdr={true} brdrr={true} vis={true}>
    <Links href='/projects' label='Проекты'/>
 </NavUnit>
 <NavUnit brdr={true} brdrr={true} vis={true}>
 <Links href='/skills' label='Навыки' />
 </NavUnit>

 <NavUnit brdr={true} brdrr={false} vis={false}>
 +7 (965) 459 35-51
   
 </NavUnit>
 <NavUnit brdr={true} brdrr={true} vis={false}>
 ignatevsergey17@gmail.com
 </NavUnit>

<NavUnit brdr={true} brdrr={true} vis={false}>
   <div className="flex justify-between w-[70%]">
      <div className="flex">
<div className="">{github}</div>
<div className="ml-[20px]">{hh}</div>
</div>
<div className="">{telegram}</div>
</div>
</NavUnit>

 
 </nav>
        </div>
}