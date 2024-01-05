import { Freim } from "../freim"
import { H } from "../units/hovers"
import { Percentage } from "../units/percentage"
let next:H[]=[{id:1,hover:"Next Router",percentage:88},
{id:2,hover:"Router",percentage:100},
{id:3,hover:"USE CONTEXT",percentage:66}

]

const Freimworks = () => {
  return (
    <Freim>
        <>
        <Percentage name='Next.js' n1={44} hovers={next}/>
        
        </>
    </Freim>
  )
}

export default Freimworks