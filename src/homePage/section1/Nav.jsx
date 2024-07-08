// import { useState } from "react";

export default function Nav() {
  // const [cartCount, setCartCount] = useState(0)
  return (
    <div className=" nav px-3 bg-[#040507] h-[70px]  w-full flex items-center fixed top-0 left-0   justify-between">
      <div className="md:hidden">
        <img src="./assets/Navigation.png" alt="" />
      </div>
      <div className="logo">
        <span className="cursor-pointer xxs:text-[6.5vw]     md:text-[4vw] text-[#FDFDFD]">
          timbu
        </span>
        <span className="xxs:text-[6.5vw] md:text-[4vw] text-[#FDFDFD]">
          Cloud
        </span>
      </div>
      <div className="navBtn text-[1.125rem] text-[#99A3A3] xxs:hidden md:contents">
        <span className="pr-8 text-[#FDFDFD] cursor-pointer hover:text-[#F24E1E]">
          Home
        </span>
        <span className="pr-8 cursor-pointer hover:text-[#F24E1E]">
          Categories
        </span>
        <span className="pr-8 cursor-pointer hover:text-[#F24E1E]">Orders</span>
        <span className="cursor-pointer hover:text-[#F24E1E]">Contact us</span>
      </div>
      <div className="signup">
        <button className="md:text-[1.85vw] xxs:text-[3vw] ">Sign up</button>
      </div>
      <div className="flex justify-end ">
        <div className="relative">
          <div>
            <img className="w-[11.5vw]" src="./assets/Cart.png" alt="" />
          </div>
          <span className="absolute text-[#191919] font-bold left-[53%] top-[30%] text-[2vw]">
            {"0"}
          </span>
        </div>
      </div>
    </div>
  );
}
