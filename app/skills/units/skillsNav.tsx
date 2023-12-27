'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import classnames from 'classnames'

interface Nav{
    id:number,
    name:string,
    href:string
}
const SkillsNav = () => {
    const currentPath= usePathname()
    let skillsNav:Nav[]=[{id:1,name:"Языки",href:""},
    {id:2,name:"Библиотеки",href:"/libraries"},
{id:3,name:"Фреймворки",href:"/freimworks"},
{id:4,name:"Сервера ",href:"/servers"}

]
  return (
    <div className="flex w-[100%]   justify-between">
        
        {skillsNav.map(m=>
        <Link key={m.id} href={`/skills/${m.href}`} 
        className={classnames({
            'font-extrabold border-b-[2px]':`/skills${m.href}`===currentPath,
            'border-b-[1px] pb-[10px] font-light':`/skills${m.href}`!==currentPath,
            '2xl:text-[20px] lg:text-[15px] text-[13px] pl-1  text-[white] border-b-white w-[100%] pb-[10px] text-center':true
          })}
        >
            {m.name}
            </Link>)}
  
        </div>
  )
}

export  {SkillsNav}