
export interface SS{
    
    perc:number,
    softskill:string
}
const SoftSkillsUnit = ({perc,softskill}:SS) => {
  return (
  <div className="flex w-full mt-[15px]">
<div className="2xl:text-[20px] text-[15px] font-normal w-[40%] ">{softskill}</div>

<div  className="relative w-[60%] ">
<div style={{width:`${perc}%`}} className="absolute 2xl:h-[27px] h-[17px] 2xl:text-[20px] text-[13px] bg-white text-black   text-right rounded-[21px] pr-[2px]">{perc}%</div>
<div className=" 2xl:h-[27px] h-[17px] bg-[#333333]  w-[100%] text-right 2xl:text-[20px] text-[13px] rounded-[21px] pr-[2px]">100%</div>

</div>


  </div>
  )
}

export {SoftSkillsUnit}