import { H } from "./units/hovers"
import { Percentage } from "./units/percentage"
import { Freim } from "./freim"
let html:H[]=[{id:1,hover:"Семантическая верстка",percentage:88}
,{id:2,hover:"Формы",percentage:100},{
  id:3,hover:"БЭМ",percentage:70},

]
let css:H[]=[{id:1,hover:"FLEX",percentage:88},
{id:2,hover:"GRID",percentage:80}
,{id:3,hover:"Анимация",percentage:60}
,{id:4,hover:"Мобильная адаптация",percentage:89}
]
let js:H[]=[{id:1,hover:"Mapping",percentage:88},
{id:2,hover:"DOM",percentage:90}
,{id:3,hover:"Functions",percentage:90}
,{id:4,hover:"Умение разбираться в чужом коде",percentage:50}
,{id:5,hover:'RestApi',percentage:70}
]



let ts:H[]=[{id:1,hover:"Interfaces",percentage:98},
{id:2,hover:"Classes",percentage:50}
]
const Skills = () => {
  return (
    <Freim>
      <>
<Percentage hovers={html}  name='HTML' n1={70}/>
<Percentage hovers={css} name='CSS' n1={75}/>
<Percentage hovers={js} name='javaScript' n1={70}/>
<Percentage hovers={ts} name='TapeScript' n1={40}/>

</>


    </Freim>
  
  )
}

export default Skills