
import bg from './mainbg.module.css'

export function MainBg(){
    return  <div className={`${bg.grid} min-w-full md:grid  grid-cols-2  text-[#e9e9e9] -z-50 2xl:min-h-[140vh] min-h-[120vh]      top-0 bg-[#222629]`}>
    <div className=" h-0 w-0 "></div>
    <div className={`${bg.mainimg} min-w-full `}></div>
    </div>
}