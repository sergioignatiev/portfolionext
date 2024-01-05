import { H } from "./units/hovers"
import { Percentage } from "./units/percentage"
import { Freim } from "./freim"
let html:H[]=[{id:1,hover:"Умение писать валтдную верстку",percentage:88},{id:2,hover:"Forms",percentage:44}]
let css:H[]=[{id:1,hover:"Animation and hard skills",percentage:88},{id:2,hover:"Styling",percentage:44}]
let js:H[]=[{id:1,hover:"mapping",percentage:88},{id:2,hover:"DOM",percentage:44}]
let ts:H[]=[{id:1,hover:"Interfaces",percentage:98}]
const Skills = () => {
  return (
    <Freim>
      <>
<Percentage hovers={html}  name='HTML' n1={70}/>
<Percentage hovers={css} name='CSS' n1={75}/>
<Percentage hovers={js} name='javaScript' n1={70}/>
<Percentage hovers={ts} name='TapeScript' n1={40}/>
<Percentage hovers={ts} name='TapeScript' n1={40}/>
</>


    </Freim>
  
  )
}

export default Skills