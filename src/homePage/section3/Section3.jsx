import './section3.scss'

export default function Section3() {
  return (
    <div className="section3 sm:h-[100vh] xxs:h-[174px] ">
      <div className='bg-[#0000008a] text-[#FDFDFD] h-full flex flex-col justify-center items-center'>
        <h1 className='sm:text-[2.5rem] xxs:text-[16px]'>LET US MAKE YOU STAND OUT</h1>
        <p className=' xxs:hidden sm:block text-center xxs:text-[3vw] md:text-[1.5vw] sm:py-5   '>Shop from anywhere in the world. Discover what it means to be the centre of attraction. Shop now and get more</p>
        {/* small screens */}
        <p className='sm:hidden xxs:block text-center text-[8px] pb-10'>
          Shop from anywhere in the world. Discover what it means to be the <br /> centre of attraction. Shop now and get more
        </p>
       
        <button className='bg-[#20AF48] rounded-[36px] px-4'>Order Now</button>
      </div>
    </div>
  )
}
