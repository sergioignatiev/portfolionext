import { Freim } from "../freim"
import { H } from "../units/hovers"
import { Percentage } from "../units/percentage"
let next:H[]=[{id:1,hover:"Next Router",percentage:88},
{id:2,hover:"Fetch",percentage:80},


]

const Freimworks = () => {
  return (
    <Freim>
        <>
        <Percentage name='Next.js' n1={44} hovers={next}/>
        <Percentage name='Tailwind' group={false} n1={80} hovers={next}/>
        <Percentage name='Bootstrap' group={false} n1={50} hovers={next}/>
        <Percentage name='Swiper.js' group={false} n1={70} hovers={next}/>
        </>
    </Freim>
  )
}

export default Freimworks