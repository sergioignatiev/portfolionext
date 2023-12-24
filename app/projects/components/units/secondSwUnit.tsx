

const SecondSwUnit = ({id,name}:{id:string,name:string}) => {
  return (
    <div className=" h-[117px] flex justify-center items-center ">
        <div className="text-[96px] text-white font-extrabold opacity-10 absolute left-[49px] top-[-20px]">{id}</div>
        <div className="text-white border-x-[1px]
        h-[80px]
        border-white w-full flex justify-center items-center  text-[24px] font-bold">{name}</div>
    </div>
  )
}

export {SecondSwUnit}