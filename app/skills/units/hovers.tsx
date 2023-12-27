let HoverUnit=({children}:{children:string})=>{
    return <div className="text-white flex items-center justify-center mt-6 group ml-[10px] py-3 ">
    <p className="mr-[20px]">{children}</p>
<div className=" h-[30px] ">
<div className="  w-[400px] relative">
      <div  className={` w-[60%] absolute bg-[white]  rounded-[21px] text-[black] text-right pr-[20px] pt-[4px]`}>88%</div>
<div className="w-[100%] bg-[#333333] h-[30px] rounded-[21px] text-right pr-[20px] pt-[4px]">100%</div>

</div>

</div>

</div>
}

const Hovers = () => {
  return (
    <div className=" duration-100 delay-100   w-[600px]  group-hover:h-[100%]   [transform:rotateX(90deg)] group-hover:[transform:rotateX(0deg)]">
        <div className=" border-white border-[1px] py-[30px] rounded-lg">
<HoverUnit>GRID</HoverUnit>
<HoverUnit>FLEX</HoverUnit>
<HoverUnit>JavaScript</HoverUnit>

</div>
    </div>
  )
}

export {Hovers}