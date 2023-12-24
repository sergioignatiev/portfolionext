import Image from "next/image"
let button:string='2xl:w-[328px] md:w-[170px] w-full md:h-[35px] w-[150px] h-[30px] 2xl:h-[56px] 2xl:rounded-[16px] rounded-[10px] 2xl:text-[20px] '
export function SwiperUnit({number}:{number:string}){
    return <div className=" text-white xl:ml-[20px]">
        
        <div className="2xl:text-[96px] lg:text-[55px] text-[30px] font-extrabold opacity-10  mr-[100px]">{number}</div>
        <div className="2xl:text-[24px] lg:text-[17px] 2xl:mt-[-100px] 2xl:ml-[160px] lg:ml-[100px]">Сайт-портфолио дизайнеру</div>
        <div className="flex lg:flex-row flex-col-reverse lg:px-[0px] px-[20px]  2xl:ml-[160px] lg:ml-[100px] 2xl:w-[1330px] ">
            <div className="">
                
            <div className="flex lg:flex-row flex-col   w-[100%] lg:border-t-[1px] border-[white] 2xl:text-[16px] text-[13px]">

                <div className="xl:border-r-[1px] border-[white] 2xl:pr-[24px] lg:pr-[10px] xl:mt-0 mt-6">
                    <div className="2xl:text-[20px] lg:text-[15px] 2xl:mt-[40px] lg:mt-[20px] pb-[10px]">Чем интересен проект1: </div>
                    Я взялся за этот проект, тк мне было интересно поработать с реальным заказчиком-дизайнером и реализовать изученные до этого навыки. 
Особое внимание я уделял</div>
            
             <div className="xl:border-r-[1px] border-[white] 2xl:px-[24px] lg:px-[10px] xl:mt-0 mt-6">
                    <div className="2xl:text-[20px] lg:text-[15px] 2xl:mt-[40px] lg:mt-[20px] pb-[10px]">Чем интересен проект2: </div>
                    В процессе работы я столкнулся с тем, что .... . В том числе понял, что нужно подтянуть навыки ... и сделал это в дальнейшем
                    </div>

                    <div className="2xl:px-[24px] lg:px-[10px] xl:mt-0 mt-6">
                    <div className="2xl:text-[20px] text-[15px] 2xl:mt-[40px] mt-[20px] pb-[10px]">Чем интересен проект3: </div>
                    В процессе работы я столкнулся с тем, что .... . В том числе понял, что нужно подтянуть навыки ... и сделал это в дальнейшем
                    </div>

            </div>

            <div className="flex 2xl:mt-[53px] mt-[30px]">
                <div className="2xl:text-[20px] text-[15px] w-[40%] mr-[14px]">Этот проект научил меня:</div>
                <div className="lg:text-[13px] text-[12px]">Связываться с дизайнерами себе дороже. Поработаю-ка я в обычной компании. А то заебли со своими пиксель вправо, пиксель влево, а у самих даже слои нормально не названы!</div>
            </div>

<div className=" mt-[40px] flex sm:flex-row flex-col">
            <button className={`${button} bg-white text-[black]`}>Код на GitHab</button>
            <button className={`${button} border-[1px] border-white sm:ml-[53px] sm:mt-0 mt-5`}>Перейти на сайт</button>
</div>
</div>


<Image
alt='image'
width={430}
height={404}
src={'/main2.jpg'}
className="grayscale hover:grayscale-0 
w-[100%]
 2xl:rounded-[50px] rounded-[30px] 2xl:h-[404px] 2xl:w-[430px] xl:h-[304px] xl:w-[330px] 2xl:ml-[93px] lg:ml-[20px]"
/>
</div>
    </div>
}