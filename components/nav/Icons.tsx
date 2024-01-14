'use client'
import { useState } from "react"
const Icons = ({icon,white}:{icon:React.ReactNode,white:React.ReactNode}) => {
    let [i,setI]=useState(icon)
  return (
    <div onMouseEnter={()=>setI(white)} onMouseOut={()=>setI(icon)}>{i}</div>
  )
}

export default Icons