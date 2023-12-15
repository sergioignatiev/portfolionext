
import bg from './mainbg.module.css'

export function MainBg(){
    return  <div className=' min-w-full grid grid-cols-2  text-white -z-50 min-h-[150vh]    top-0 bg-[#222629]'>
    <div className="  min-h-[100vh] "></div>
    <div className={`${bg.mainimg} min-w-full`}></div>
    </div>
}