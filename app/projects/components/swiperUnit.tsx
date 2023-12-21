import Image from "next/image"
let button:string='2xl:w-[328px] md:w-[170px] md:h-[35px] w-[150px] h-[30px] 2xl:h-[56px] 2xl:rounded-[16px] rounded-[10px] 2xl:text-[20px] '
export function SwiperUnit({number}:{number:string}){
    return <div className=" text-white ">
        
        <div className="text-[96px] font-extrabold opacity-10  mr-[100px]">{number}</div>
        <div className="text-[24px] mt-[-100px] ml-[160px]">Сайт-портфолио дизайнеру</div>
        <div className="flex ml-[160px]">
            <div className="">
            <div className="flex w-[100%] border-t-[1px] border-[white] text-[16px]">

                <div className="border-r-[1px] border-[white] pr-[24px]">
                    <div className="text-[20px] mt-[40px]">Чем интересен проект: </div>
                    Я взялся за этот проект, тк мне было интересно поработать с реальным заказчиком-дизайнером и реализовать изученные до этого навыки. 
Особое внимание я уделял</div>
            
             <div className="border-r-[1px] border-[white] px-[24px]">
                    <div className="text-[20px] mt-[40px]">Чем интересен проект: </div>
                    В процессе работы я столкнулся с тем, что .... . В том числе понял, что нужно подтянуть навыки ... и сделал это в дальнейшем</div>

                    <div className="px-[24px]">
                    <div className="text-[20px] mt-[40px]">Чем интересен проект: </div>
                    В процессе работы я столкнулся с тем, что .... . В том числе понял, что нужно подтянуть навыки ... и сделал это в дальнейшем</div>

            </div>

            <div className="flex mt-[53px]">
                <div className="text-[20px] w-[40%] mr-[14px]">Этот проект научил меня:</div>
                <div className="">Связываться с дизайнерами себе дороже. Поработаю-ка я в обычной компании. А то заебли со своими пиксель вправо, пиксель влево, а у самих даже слои нормально не названы!</div>
            </div>
<div className=" mt-[40px]">
            <button className={`${button} bg-white text-[black]`}>Код на GitHab</button>
            <button className={`${button} border-[1px] border-white ml-[53px]`}>Перейти на сайт</button>
</div>
</div>


<Image
alt='image'
width={331}
height={404}
src={'/next.svg'}
className="border-white border-[1px] rounded-[50px] ml-[93px]"
/>
</div>
    </div>
}