'use client'
import { useState } from "react"
import Link from "next/link"
import Aside from "./Aside"
import { github,hh,telegram,mail,phone } from "../svgs"
import { TfiAlignJustify } from "react-icons/tfi"
function NavRight(){
    return <div className="flex pl-[39px]  pr-[27px] h-[70px] ">
<div className="flex items-center"> 
<div className="">         <Link href='https://github.com/sergioignatiev' target="_blank">{github}</Link></div>
<div className="ml-[10px]"><Link href='https://novorossiysk.hh.ru/resume/b921ce59ff0b345b4c0039ed1f7574744d706e' target="_blank">{hh}    </Link></div>
</div>

<div className="flex items-center pl-[33px]"> 
<div className="">{phone}</div>
<div className="ml-[10px]"><Link href='https://t.me/SerjioIgnatev' target='_blank'>{telegram}</Link></div>
<div className="ml-[10px]"><Link href='https://mail.google.com/mail/u/0/#sent?compose=GTvVlcSBmmDKrgQKJHKzXZZKMwwWQkfHXNCXbhTHkFZdTVSnRtBfHMCXjlcVdrpHHVScgnPXRTmpp' target='_blank'>{mail}    </Link></div>
</div>

    </div>
}

const NavMobile = () => {
    let [tog,setTog]=useState(true)
    function switcher(){
        setTog(prev=>!prev)
    }
  return (
    <div className="absolute text-[#e9e9e9] border-b-[1px] border-[#e9e9e9] z-50 w-full flex ">
<div onClick={switcher} className=" flex h-[70px] w-[70px] border-white border-r-[1px] items-center justify-center">
<TfiAlignJustify className="text-[40px]" />
</div>
<Aside sw={switcher} toggle={tog}/>
<NavRight/>
    </div>
  )
}

export  {NavMobile}