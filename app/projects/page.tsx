import SwiperProjects from "./components/swiperProjects"




const Projects = () => {
   
  return (
    <div className='w-full bg-[#1f1f1f] min-h-screen pt-[160px] pl-[68px]'>
        <div className="border-l-[1px] border-[white] pl-[53px]">
<h1 className='text-white text-[64px] font-bold'>МОИ РАБОТЫ</h1>

<SwiperProjects/>
        </div>
    </div>
  )
}

export default Projects