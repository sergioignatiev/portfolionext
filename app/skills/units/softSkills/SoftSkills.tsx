import React from 'react'
import { SoftSkillsUnit } from './softSkillsUnit'

const SoftSkills = () => {
  return (
    <div className='xl:pl-[117px] w-full  px-[20px] xl:w-[50%] 2xl:pt-[162px]  lg:pt-[120px]  xl:pr-[95px]'>
<div className="w-full text-[24px] font-extrabold border-b-[white] border-b-[1px] py-[3px]">Soft Skills</div>
<div className="mt-[100px] min-h-[50vh] flex flex-col  justify-between ">
    <SoftSkillsUnit softskill='English Language' perc={88}/>
    <SoftSkillsUnit softskill='Аналитическое мышление' perc={10}/>
    <SoftSkillsUnit softskill='Длина члена' perc={14}/>
    <SoftSkillsUnit softskill='French' perc={88}/>
    <SoftSkillsUnit softskill='English' perc={88}/>
    <SoftSkillsUnit softskill='French' perc={88}/>
    <SoftSkillsUnit softskill='English' perc={88}/>
    <SoftSkillsUnit softskill='French' perc={88}/>
</div>
    </div>
  )
}

export  {SoftSkills}