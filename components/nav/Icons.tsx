'use client'
import { useState } from "react"
const Icons = ({icon,white}:{icon:React.ReactNode,white:React.ReactNode}) => {
    let [i,setI]=useState(icon)
    function I(){
        return i
    }
  return (
    <div   onMouseEnter={()=>setI(white)} onMouseOut={()=>setI(icon)}><I/></div>
  )
}

export default Icons