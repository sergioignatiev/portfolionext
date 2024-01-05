import Image from "next/image"
import Link from "next/link"

let button:string='2xl:w-[328px] md:w-[190px]  w-full md:h-[40px] w-[150px] h-[30px] 2xl:h-[56px] 2xl:rounded-[16px] rounded-[10px] 2xl:text-[20px] '
import { S } from "./units/data"
export function SwiperUnit({id,name,interesting,interesting2,difficulties,difficulties2,problems,problems2
,learned,learned2,image,site,github
}:S){
    return <div className=" text-white xl:ml-[20px] ">
        
        <div className="2xl:text-[96px] lg:text-[55px] text-[30px] font-extrabold opacity-10  mr-[100px]">{id}</div>
        <div className="2xl:text-[24px] lg:text-[17px] 2xl:mt-[-110px] 2xl:ml-[160px] lg:ml-[100px] pb-[20px]">{name}</div>
        <div className="flex lg:flex-row flex-col-reverse lg:px-[0px] px-[20px]  2xl:ml-[160px] lg:ml-[100px]  ">
            <div className="w-full ">
                
            <div className="flex lg:flex-row flex-col   w-[100%] lg:border-t-[1px]  border-[#e9e9e9] 2xl:text-[16px] text-[13px]">

                <div className="xl:border-r-[1px] border-[white] 2xl:pr-[24px] lg:pr-[10px] xl:mt-0 mt-6">
                    <div className="2xl:text-[20px] lg:text-[15px] 2xl:mt-[40px] lg:mt-[20px] pb-[10px]">{interesting} </div>
{interesting2}</div>
            
             <div className="xl:border-r-[1px] border-[white] 2xl:px-[24px] lg:px-[10px] xl:mt-0 mt-6">
                    <div className="2xl:text-[20px] lg:text-[15px] 2xl:mt-[40px] lg:mt-[20px] pb-[10px]">{difficulties} </div>
                   {difficulties2}
                    </div>

                    <div className="2xl:px-[24px] lg:px-[10px] xl:mt-0 mt-6">
                    <div className="2xl:text-[20px] text-[15px] 2xl:mt-[40px] mt-[20px] pb-[10px]">{problems}</div>
                     {problems2}    
                    </div>

            </div>

            <div className="flex 2xl:mt-[53px] mt-[30px]">
                <div className="2xl:text-[20px] text-[15px] w-[40%] mr-[14px]">{learned}</div>
                <div className="lg:text-[13px] text-[12px] xl:pr-[170px]">{learned2}</div>
            </div>

<div className=" mt-[40px] flex sm:flex-row flex-col">
<Link  href={github} target="_blank"> <button className={`${button} bg-white text-[black]`}>Код на GitHab</button></Link>
            <Link target="_blank" href={site}> <button className={`${button} border-[1px] border-white sm:ml-[53px] sm:mt-0 mt-5`}>Перейти на сайт</button></Link>
</div>
</div>
<Link href={site}  className="flex flex-shrink-0 " target="_blank">
<Image
alt='image'
width={430}
height={404}
src={image}
className="grayscale hover:grayscale-0 
w-[100%] 
 2xl:rounded-[50px] rounded-[30px] 2xl:h-[404px] 2xl:w-[430px] xl:h-[304px] xl:w-[330px] 2xl:mr-[3px] "
/>
</Link>


</div>
    </div>
}