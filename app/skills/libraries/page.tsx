import { H } from "../units/hovers"
import { Percentage } from "../units/percentage"
import { Freim } from "../freim"
let react:H[]=[{id:1,hover:"Hooks",percentage:88},
{id:2,hover:"Router",percentage:100},
{id:3,hover:"USE CONTEXT",percentage:66}

]
let tailwind:H[]=[{id:1,hover:"daysyUi",percentage:88},
{id:2,hover:"Умение разбираться в чужом коде",percentage:80}

]


const Libraries = () => {
  return (
    <Freim>
      <>
<Percentage hovers={react} name='React' n1={90}/>
<Percentage hovers={tailwind} name='Tailwind' n1={90}/>
<Percentage hovers={tailwind} name='Bootstrap' n1={90}/>
<Percentage hovers={tailwind} name='jQuery' n1={90}/>
<Percentage hovers={react} name='React' n1={90}/>

</>
</Freim>
  
  )
}

export default Libraries