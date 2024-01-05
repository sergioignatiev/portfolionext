import Link from "next/link"
export let button:string='2xl:w-[328px] md:w-[170px] md:h-[35px] \
w-[150px] h-[30px] 2xl:h-[56px] 2xl:rounded-[16px] rounded-[10px] 2xl:text-[20px]  duration-1000 hover:scale-[90%]'
function Paragraph({children}:{children:string}){
return <p className="duration-1000 focus:scale-[1210%]   mt-[10px]">{children}</p>
}
export function Mainpage(){
return <div className="absolute text-white 2xl:mt-[259px] xl:mt-[170px] mt-[150px] 
 md:pl-[60px] ml-[20px] mr-[20px]">
<h3 className="2xl:text-[42px] text-[30px] md:font-bold font-semibold">Фронтенд разработчик</h3>
<h1 className="2xl:text-[130px] md:text-[80px] text-[60px] font-semibold md:mt-0 mt-[10px]">Сергей Игнатьев</h1>
<div className="2xl:max-w-[552px] max-w-[400px] \
2xl:text-[20px] text-[17px]\
 font-normal 2xl:mt-[54px] md:mt-[30px] mt-[50px]\

 ">

<Paragraph>
    Здравствуйте! Я Сергей из Новороссийска. 
    </Paragraph>


<Paragraph>
Люблю Веб-разработку и активно развиваюсь в данном направлении.
</Paragraph>
<Paragraph>
    Я работал со стартапами,на фрилансе  и учился самостоятельно на курсах — w3schools и freeCodeCamp.
</Paragraph>
<Paragraph>
Планирую и дальше активно развиваться в данном направлении.

</Paragraph>

</div>
<div className="flex 2xl:mt-[83px] mt-[50px] 2xl:mb-[214px] mb-[110px]">
<Link href='/projects'><button className={`${button} bg-white text-black hover:text-white `}>Мои Проекты</button></Link>
<Link href='/skills'><button className={`${button} border-[1px] border-white md:ml-[39px] ml-[20px]`}>Мои Навыки</button></Link>
</div>

</div>
}