import { MainBg } from "@/components/main/mainbg"
import { Mainpage } from "@/components/main/mainpage"
import { stars,starsleft } from "./svgs"
export default function Home() {
  
  return (
  <div className='relative'>
    <div className="absolute right-0 2xl:visible invisible">{starsleft}</div>
<div className="absolute bottom-0 2xl:visible invisible">{stars}</div>
<Mainpage/>
<MainBg/>

  </div>
  )
}
