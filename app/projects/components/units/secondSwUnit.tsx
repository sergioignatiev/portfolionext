

const SecondSwUnit = ({id,name}:{id:string,name:string}) => {
  return (
    <div className=" h-[117px] flex justify-center items-center translate-x-[-30%]">
        <div className="2xl:text-[96px] h-full flex items-center  text-[60px] text-white font-extrabold opacity-10 absolute left-[49px] ">{id}</div>
        <div className="text-white border-x-[1px]
        h-[80px]
        border-white w-full flex justify-center items-center  2xl:text-[24px] text-[17px] font-bold">{name}</div>
    </div>
  )
}

export {SecondSwUnit}