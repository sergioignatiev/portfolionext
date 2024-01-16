import { Freim } from "../freim"
import { H } from "../units/hovers"
import { Percentage } from "../units/percentage"
let next:H[]=[{id:1,hover:"Next Router",percentage:88},
{id:2,hover:"Fetch",percentage:80},


]
const page = () => {
  return (
    <Freim>
<>
<Percentage name='Vercel' group={false} n1={70} />
<Percentage name='GitHub' group={false} n1={90} />
<Percentage name='Git' group={false} n1={70} />
</>

    </Freim>
  )
}

export default page