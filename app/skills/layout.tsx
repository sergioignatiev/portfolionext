import { Metadata } from "next"
import { SkillsNav } from "./units/skillsNav"
import { SoftSkills } from "./units/softSkills/SoftSkills"
export const metadata: Metadata = {
    title: 'Навыки',
    description: 'Generated by create next app',
  }
const SkillsLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="bg-[#1f1f1f] text-white min-h-screen pt-[159px] pb-[300px] flex lg:flex-row flex-col">
        <div className=" lg:pl-[63px] px-[20px] pb-[64px]  lg:w-[50%] ">
        <h1 className="2xl:text-[64px] lg:text-[40px] text-[32px] font-bold pb-[70px]">МОИ НАВЫКИ</h1>
        <SkillsNav/>
        <main className="mt-[100px] pr-[58px]">{children}</main>
        </div>
<SoftSkills/>
        </div>
  )
}

export default SkillsLayout