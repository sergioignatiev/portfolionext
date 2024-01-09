import Link from "next/link"
import { whatsapp,telegram,github,hh,mail ,logo} from "./svgs"
function FooterUnit({children,w}:{children:React.ReactNode,w:string}){
return <div className={`flex items-center justify-center border-collapse
border-l-[1px] border-r-[0.5px] border-white ${w} h-[96px] text-[16px]
`}>{children}</div>
}

const Footer = () => {

  return (
<>
  
    <footer className="bg-[#1f1f1f] pb-[46px] text-[#e9e9e9] px-[56px]  border-t-[1px] border-white  w-[100%]">
   
   <div className="flex justify-between">
<FooterUnit w='w-1/6'>
<div className="flex mx-[46px] justify-between w-full">
  <div className="">{logo}</div>
  <div className="">2024</div>
  <div className="">Анна Севоян</div>
</div>

</FooterUnit>
<FooterUnit w='w-3/6'><div className="flex mx-[100px]  w-full justify-between">

  <div className="flex w-full">
   <div className="">{github}</div>
   <div className=" ml-[20px]">{hh}</div>
  </div>

<div className="flex w-full">
<div className="">{whatsapp}</div>
<div className="ml-[20px]">{telegram}</div>
<div className="ml-[20px]">{mail}</div>

</div>

<div className="flex w-full text-[20px]   font-bold   "><Link className="border-b-[1px] hover:font-extrabold border-b-[#e9e9e9]" href='https://sergioignatiev.github.io/cv/cv.pdf' target='_blank'>Скачать резюме</Link></div>

  </div></FooterUnit>
<FooterUnit w='w-2/6'><div className="flex text-[16px] px-[121px] w-full justify-between">
  <div className="hover:font-bold hover:underline"><Link href='/'>Сергей Игнатьев</Link></div>
  <div className="hover:font-bold hover:underline"><Link href='/projects'>Проекты</Link></div>
  <div className="hover:font-bold hover:underline"><Link href='/skills'>Навыки</Link></div>
  
  </div></FooterUnit>
   </div>
  </footer>
  </>
  )
}

export default Footer