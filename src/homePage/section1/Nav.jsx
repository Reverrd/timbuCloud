

export default function Nav() {
  return (
    
      <div className=" nav px-3 bg-[#040507] h-[70px]  w-full flex items-center fixed top-0 left-0   justify-between">
        <div className="md:hidden">
        <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="4" rx="2" fill="#F24E1E"/>
            <rect y="8" width="32" height="4" rx="2" fill="#F24E1E"/>
            <rect y="16" width="32" height="4" rx="2" fill="#F24E1E"/>
        </svg>

        </div>
        <div className="logo">
            <span className="cursor-pointer xxs:text-[8vw]     md:text-[4vw] text-[#FDFDFD]">
                timbu
            </span>
            <span className="xxs:text-[8vw] md:text-[4vw] text-[#FDFDFD]">
                Cloud
            </span>
        </div>
        <div className="navBtn text-[1.125rem] text-[#99A3A3] xxs:hidden md:contents">
            <span className="pr-8 text-[#FDFDFD] cursor-pointer hover:text-[#F24E1E]">Home</span>
            <span className="pr-8 cursor-pointer hover:text-[#F24E1E]">Categories</span>
            <span className="pr-8 cursor-pointer hover:text-[#F24E1E]">Orders</span>
            <span className="cursor-pointer hover:text-[#F24E1E]">Contact us</span>
        </div>
        <div className="signup">
            <button className="md:text-[1.85vw] xxs:text-[3vw] ">
                Sign up
            </button>
        </div>
      </div>
    
  )
}
