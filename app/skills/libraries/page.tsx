import { H } from "../units/hovers"
import { Percentage } from "../units/percentage"
import { Freim } from "../freim"
let react:H[]=[{id:1,hover:"Hooks",percentage:88},
{id:2,hover:"Router",percentage:100},
{id:3,hover:"Next Router",percentage:70},
{id:4,hover:"Мотивация и желание развиваться",percentage:101}

]
let tailwind:H[]=[{id:1,hover:"daysyUi",percentage:88},
{id:2,hover:"Умение разбираться в чужом коде",percentage:80}

]


const Libraries = () => {
  return (
    <Freim>
      <>
      
<Percentage hovers={react} group={true}  name='React' n1={70}/>

<Percentage hovers={tailwind} group={false} name="DaisyUI" n1={60}/>
<Percentage hovers={tailwind} group={false} name='React Icons' n1={70}/>
<Percentage hovers={tailwind} group={false} name='Reactstrap' n1={80}/>
<Percentage hovers={tailwind} group={false} name='Framer Motion' n1={50}/>
<Percentage hovers={tailwind} group={false} name='NPM' n1={80}/>
<Percentage hovers={tailwind} group={false} name='jQuery' n1={30}/>


</>
</Freim>
  
  )
}

export default Libraries