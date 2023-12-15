import { MainBg } from "@/components/main/mainbg"
let button:string='w-[328px] h-[56px] rounded-[16px] text-[20px] '
export default function Home() {
  return (
  <div className='relative'>
<div className="absolute text-white mt-[259px] border-l-[1px] border-[white] ml-[68px] pl-[91px]">
  <h3 className="text-[42px] font-bold">Фронтенд разработчик</h3>
  <h1 className="text-[130px] font-semibold">Сергей Игнатьев</h1>
  <div className="max-w-[552px] text-[20px] font-normal mt-[54px]">
  <p>Здравствуйте! Я Сергей из Новороссийска. </p>
<p className="mt-[20px]">
Моя душа лежит к кодингу, больше всего я люблю верстать сайты. Активно развиваюсь как веб-разработчик.</p>
<p className="mt-[20px]">Я работал со стартапами и учился самостоятельно на англоязычных курсах — w3schools и freeCodeCamp. </p>
</div>
<div className="flex mt-[83px] mb-[214px]">
  <button className={`${button} bg-white text-black`}>Мои Проекты</button>
<button className={`${button} border-[1px] border-white ml-[39px]`}>Мои Навыки</button>
</div>

</div>

<MainBg/>
  </div>
  )
}
