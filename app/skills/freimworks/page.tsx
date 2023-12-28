import { Freim } from "../freim"
import { H } from "../units/hovers"
import { Percentage } from "../units/percentage"
let react:H[]=[{id:1,hover:"Hooks",percentage:88},
{id:2,hover:"Router",percentage:100},
{id:3,hover:"USE CONTEXT",percentage:66}

]

const Freimworks = () => {
  return (
    <Freim>
        <>
        <Percentage name='Next.js' n1={44} hovers={react}/>
        <Percentage name='Vite' n1={74} hovers={react}/>
        </>
    </Freim>
  )
}

export default Freimworks