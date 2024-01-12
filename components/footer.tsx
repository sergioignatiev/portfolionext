import Link from "next/link"
import { whatsapp,telegram,github,hh,mail ,logo} from "./svgs"
function FooterUnit({children,w}:{children:React.ReactNode,w:string}){
return <div className={` items-center justify-center border-collapse
md:border-l-[1px] md:border-r-[0.5px] border-white ${w} h-[96px] text-[16px]
`}>{children}</div>
}

const Footer = () => {

  return (
<>
  
    <footer className="bg-[#1f1f1f] pb-[46px] text-[#e9e9e9] lg:px-[56px]  border-t-[1px] border-white  w-[100%]">
   
   <div className="flex lg:flex-row flex-col">
<FooterUnit w='flex 2xl:w-1/6 lg:w-1/3'>
<div className="flex mx-[46px] justify-between w-full">
  <div className="">{logo}</div>
  <div className="">2024</div>
  <div className="">Анна Севоян</div>
</div>

</FooterUnit>
<FooterUnit w='flex 2xl:w-3/6 lg:w-2/3 '><div className="flex md:flex-row flex-col  md:mx-[100px] mx-[20px]  w-full justify-between">

  <div className="flex w-full md:mt-[0] mt-[20px]">
   <div className="">{github}</div>
   <div className=" ml-[20px]">{hh}</div>
  </div>

<div className="flex w-full md:mt-[0] mt-[20px]">
<div className="">{whatsapp}</div>
<div className="ml-[20px]">{telegram}</div>
<div className="ml-[20px]">{mail}</div>

</div>

<div className="md:mt-[0] mt-[20px]  flex w-full text-[20px]   font-bold   "><Link className="border-b-[1px] hover:font-extrabold border-b-[#e9e9e9]" href='https://sergioignatiev.github.io/cv/cv.pdf' target='_blank'>Скачать резюме</Link></div>

  </div></FooterUnit>

<FooterUnit w='2xl:flex hidden 2xl:w-2/6 '><div className="flex text-[16px] px-[121px] w-full justify-between">
  <div className="hover:font-bold hover:underline"><Link href='/'>Сергей Игнатьев</Link></div>
  <div className="hover:font-bold hover:underline"><Link href='/projects'>Проекты</Link></div>
  <div className="hover:font-bold hover:underline"><Link href='/skills'>Навыки</Link></div>
  </div>
  </FooterUnit>
  
  
   </div>
  </footer>
  </>
  )
}

export default Footer