import { MainBg } from "@/components/main/mainbg"
import { Mainpage } from "@/components/main/mainpage"
import { Mainmobile } from "@/components/main/mainmobile/mainmobile"
import { stars,starsleft } from "./svgs"
export default function Home() {
  
  return (
    <>
  <div className='relative'>

    <div className="lg:block hidden">
 
<Mainpage/>
<MainBg/>
</div>
<div className="lg:hidden block"><Mainmobile/></div>

  </div>

  </>
  )
}
