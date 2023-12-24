import SwiperProjects from "./components/swiperProjects"
import { SwiperTwo } from "./components/swiperTwo"




const Projects = () => {
   
  return (
    <div className='w-full bg-[#1f1f1f] min-h-screen pt-[160px] 2xl:pl-[68px] lg:pl-[20px]'>
        <div className="2xl:border-l-[1px] border-[white] 2xl:pl-[53px]">
<h1 className='text-white 2xl:text-[64px] xl:text-[40px] text-[30px] font-bold'>МОИ РАБОТЫ</h1>

<SwiperProjects/>

        </div>
        
        <div className="py-[52px]"><SwiperTwo/></div>
    </div>
  )
}

export default Projects