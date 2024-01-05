import React from 'react'
import { SoftSkillsUnit } from './softSkillsUnit'
import { Percentage } from '../percentage'
const SoftSkills = () => {
  return (
    <div className='xl:pl-[117px] w-full 2xl:ml-[90px]  px-[20px] xl:w-[50%] 2xl:pt-[162px]  lg:pt-[120px]  xl:pr-[58px]'>
<div className="w-full text-[24px] font-extrabold border-b-[white] border-b-[1px] py-[3px]">Soft Skills</div>
<div className="mt-[100px] min-h-[50vh] flex flex-col  justify-between ">
    <SoftSkillsUnit softskill='English Language' perc={88}/>
   
    <SoftSkillsUnit softskill='France' perc={18}/>
    <SoftSkillsUnit softskill='Espanol' perc={18}/>
    <SoftSkillsUnit softskill='Аналитическое мышление' perc={80}/>
    <SoftSkillsUnit softskill='Организованность' perc={74}/>
    <SoftSkillsUnit softskill='Обучаемость и адаптация' perc={88}/>
    <SoftSkillsUnit softskill='Большой Хуй' perc={100}/>
    
    
</div>
    </div>
  )
}

export  {SoftSkills}