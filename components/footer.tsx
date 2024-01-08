
import Image from 'next/image'
function FooterUnit({children,w}:{children:React.ReactNode,w:string}){
return <div className={`flex items-center justify-center border-collapse
border-l-[1px] border-r-[0.5px] border-white ${w} h-[96px] text-[16px]
`}>{children}</div>
}

const Footer = () => {
  const logo=<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
  <circle cx="13" cy="13" r="12.5" stroke="#E9E9E9"/>
</svg>
const github=<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
<circle cx="13" cy="13" r="12.5" stroke="#E9E9E9"/>
<path d="M15.4845 21.1231V18.1658C15.5824 17.2397 15.3297 16.3103 14.7809 15.5783C16.8919 15.5783 19.0029 14.0996 19.0029 11.5121C19.0592 10.5879 18.8129 9.67858 18.2992 8.92449C18.4962 8.07429 18.4962 7.18712 18.2992 6.33691C18.2992 6.33691 17.5955 6.33691 16.1882 7.44587C14.3305 7.07622 12.4166 7.07622 10.5589 7.44587C9.15157 6.33691 8.44791 6.33691 8.44791 6.33691C8.23681 7.18712 8.23681 8.07429 8.44791 8.92449C7.93555 9.67554 7.68687 10.59 7.74424 11.5121C7.74424 14.0996 9.85523 15.5783 11.9662 15.5783C11.6918 15.9405 11.4877 16.3545 11.3681 16.7981C11.2485 17.2417 11.2133 17.7075 11.2626 18.1658M11.2626 18.1658V21.1231M11.2626 18.1658C8.08904 19.6444 7.74424 16.6872 6.33691 16.6872" stroke="#E9E9E9" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  return (
<>
    <div className="h-[7px] bg-[#1f1f1f]"></div>
    <footer className="bg-[#1f1f1f] pb-[46px] text-[#e9e9e9] px-[56px]  border-t-[1px] border-white  w-[100%]">
   
   <div className="flex justify-between">
<FooterUnit w='w-1/6'>
<div className="flex mx-[46px] justify-between w-full">
  <div className="">{logo}</div>
  <div className="">2024</div>
  <div className="">Анна Севоян</div>
</div>

</FooterUnit>
<FooterUnit w='w-3/6'><div className="flex mx-[100px]">
  <div className="">
   <div className="">{github}</div>
  </div>
  </div></FooterUnit>
<FooterUnit w='w-2/6'><h1>FOOTER UNIT</h1></FooterUnit>
   </div>
  </footer>
  </>
  )
}

export default Footer