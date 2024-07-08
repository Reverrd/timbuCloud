import { useState } from "react";


export default function Hero() {

  const [cartCount, setCartCount] = useState(0)
  const handleScroll = ()=>{
    const e = document.getElementById('list');
    if (e) {
      e.scrollIntoView({ behavior: 'smooth' });
    }}
  return (
    <div className=' md:h-[91.25vh] xxs:h-[455px]   mt-[70px] flex flex-col justify-between '>
      {/* small screen */}
      <div className="md:hidden xxs:block mt-[190px] heroText w-full text-center ">
        <h1 className="text-[7.1vw] pt-4">Discover what it</h1>
        <h1 className="text-[7.1vw]"> means&nbsp;to compress Time</h1>
        <p className="text-[3.5vw]">find what you need ?</p>
      </div>
      {/* big screen */}
      <div className="xxs:hidden md:block ml-[112px] mt-24 heroText w-[60vw] text-left ">
        <h1 className="text-[4.5vw] pt-4">Discover what it means&nbsp;to compress Time</h1>
        <p className="text-[1.5rem]">find what you need ?</p>
      </div>
      <div className=" mb-10 flex flex-col justify-end">
        <div className="orderBtn  flex justify-center  ">
        <button onClick={handleScroll} className=" text-[1.5rem]">Order Now</button>
        </div>
        <div className="flex justify-end xxs:hidden md:flex">
            <div className="relative">
                <div>
                <img src="./assets/Cart.png" alt="" />
                </div>
                <span className="absolute text-[#191919] font-bold left-[53%] top-[30%] text-[30px]">
                {cartCount}
                </span>
            </div>
            
        </div>
      </div>
    </div>
  )
}
