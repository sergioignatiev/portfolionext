let button:string='2xl:w-[328px] md:w-[170px] md:h-[35px] w-[150px] h-[30px] 2xl:h-[56px] 2xl:rounded-[16px] rounded-[10px] 2xl:text-[20px] '
export function Mainpage(){
return <div className="absolute text-white 2xl:mt-[259px] mt-[170px] 
md:border-l-[1px] border-[white] md:ml-[68px] md:pl-[91px] ml-[20px] mr-[20px]">
<h3 className="2xl:text-[42px] text-[30px] md:font-bold font-semibold">Фронтенд разработчик</h3>
<h1 className="2xl:text-[130px] md:text-[80px] text-[60px] font-semibold md:mt-0 mt-[70px]">Сергей Игнатьев</h1>
<div className="2xl:max-w-[552px] max-w-[400px] 2xl:text-[20px] text-[17px] font-normal 2xl:mt-[54px] md:mt-[30px] mt-[50px]">
<p>Здравствуйте! Я Сергей из Новороссийска. </p>
<p className="2xl:mt-[20px] mt-[15px]">
Моя душа лежит к кодингу, больше всего я люблю верстать сайты. Активно развиваюсь как веб-разработчик.</p>
<p className="2xl:mt-[20px] mt-[15px]">Я работал со стартапами и учился самостоятельно на англоязычных курсах — w3schools и freeCodeCamp. </p>
</div>
<div className="flex 2xl:mt-[83px] mt-[50px] 2xl:mb-[214px] mb-[110px]">
<button className={`${button} bg-white text-black`}>Мои Проекты</button>
<button className={`${button} border-[1px] border-white ml-[39px]`}>Мои Навыки</button>
</div>

</div>
}