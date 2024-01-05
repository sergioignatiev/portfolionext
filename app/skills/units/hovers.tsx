 export interface H{
    id:number,
    hover:string
    percentage:number
}
let HoverUnit=({children,percentage}:{children:string,percentage:number})=>{
    return <div className="text-white flex items-center    group  pt-[20px] w-full ">
    <p className="lg:mr-[20px] 2xl:text-[16px] text-[12px] lg:w-[45%] ">{children}</p>

<div className="ml-[20px] lg:w-[55%] w-[100%]">
<div className="  w-[100%] relative">
      <div style={{width:`${percentage-10}%`}}  className="  absolute bg-[white]  
      rounded-[21px] text-[black] text-right pr-[20px] pt-[3px] 
      2xl:h-[27px] h-[17px] 2xl:text-[17px] text-[10px]">{percentage}%</div>
<div className="w-[100% 2xl:text-[16px] text-[12px] bg-[#333333] 2xl:h-[27px] h-[17px] rounded-[21px] text-right pr-[2px] pt-[3px]">100%</div>

</div>

</div>

</div>
}

const Hovers = ({hovers}:{hovers?:H[]}) => {
  return (
    <div className="lg:ml-[20px] duration-100 delay-100   w-[700px] h-[0px] group-hover:h-[100%]   [transform:rotateX(90deg)] group-hover:[transform:rotateX(0deg)]">
        <div className="lg:ml-[20px] border-[#D9D9D9] border-[1px] 2xl:p-[30px] p-[10px] rounded-[21px]">
{hovers&&hovers.map(h=><HoverUnit percentage={h.percentage} key={h.id}>{h.hover}</HoverUnit>)}

</div>
    </div>
  )
}

export {Hovers}