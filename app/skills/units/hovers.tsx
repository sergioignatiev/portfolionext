 export interface H{
    id:number,
    hover:string
    percentage:number
}
let HoverUnit=({children,percentage}:{children:string,percentage:number})=>{
    return <div className="text-white flex items-center justify-center  group  pt-[20px] ">
    <p className="mr-[20px] text-[16px] w-[55%]">{children}</p>
<div className=" h-[30px] ">
<div className="  w-[393px] relative">
      <div style={{width:`${percentage}%`}}  className={`  absolute bg-[white]  rounded-[21px] text-[black] text-right pr-[20px] pt-[4px]`}>{percentage}%</div>
<div className="w-[100%] bg-[#333333] h-[30px] rounded-[21px] text-right pr-[2px] pt-[4px]">100%</div>

</div>

</div>

</div>
}

const Hovers = ({hovers}:{hovers?:H[]}) => {
  return (
    <div className="ml-[-20px] duration-100 delay-100   w-[700px] h-[0px] group-hover:h-[100%]   [transform:rotateX(90deg)] group-hover:[transform:rotateX(0deg)]">
        <div className=" border-[#D9D9D9] border-[1px] p-[30px] rounded-[21px]">
{hovers&&hovers.map(h=><HoverUnit percentage={h.percentage} key={h.id}>{h.hover}</HoverUnit>)}

</div>
    </div>
  )
}

export {Hovers}