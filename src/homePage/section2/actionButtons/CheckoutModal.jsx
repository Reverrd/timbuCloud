import advertWatchData from "../../../data/advertWatch";
import '../section2.scss'

export default function CheckoutModal() {
  return (
    <div className="w-full  relative   h-auto flex justify-center items-center   ">
    {/* Overall card */}
    <div className="modalBackground hide-scrollbar  rounded-[36px] flex flex-col justify-between mt-[200px] pt-[100px] pb-[50px] h-[100vh] overflow-y-scroll  ">
      {/* Top section */}
      <div className=" flex justify-center">
        {/* Order summary */}
        <div className="py-[48px] px-[24px] bg-[#FDFDFD] rounded-[16px] ">
            <div className=" w-[400px] h-[300px] border flex flex-col px-[50px] pt-[60px]">
                <h1 className="text-[28px]">Order Summary</h1>
                <div className="flex">
                  <span><img src={"/"} alt="" /></span>
                  <span className="text-[16px]">
                    {"name of product"}
                  </span>
                </div>
                <p className="text-[32px]">
                  <span>Total:</span><span className="productPrice text-[#E53400] ">N{'429,700'}</span>
                </p>
            </div>
        </div>
        {/* Payment Sections */}
        <div className="bg-[#FDFDFD] rounded-[16px] ml-6">
        <div className=" w-[400px]   " >
          <h1>Make Payment</h1>
          <div>
              <form action="POST">
                <div className="flex border border-black">
                <label htmlFor="fullName">Full Name</label>
                  <input type="text" />
                  </div>
                <div className="flex border border-black">
                <label htmlFor="fullName">Card Details</label>
                  <input type="text" />
                  </div>
                  <div className="flex">
                  <div>
                    <label htmlFor="">MM/YY</label>
                    <input className="border border-black" type="" />
                  </div>
                  <div>
                    <label htmlFor="">CVV</label>
                    <input className="border border-black" type="" />
                  </div>
                  </div>
                  <div>
                  <button type="submit">Pay Now</button>
                  </div>
                
              </form>
          </div>
          <div>
            some writeups
          </div>
        </div>
        </div>
      </div>
      <div>
        {}
      </div>
      <div className=" flex justify-center">
        <button className="continueShoppingBtn text-[1.5vw] bg-[#F24E1E] rounded-[8px] py-[15px]">
        Continue Shopping
        </button>
      </div>
      {/* advertSession */}
      <div>
        <h2 className="font pl-[65px]">Check out many other items from the store</h2>
        <div className="flex  justify-center">
          {
            advertWatchData.map(advertWatch=>(
               <div className="bg-[#FDFDFD] rounded-[30px] p-4 mx-[12px] flex flex-col items-center" key={advertWatch.id}>
               <img src={advertWatch.image} alt="" />
                <div id="adWatchtext">
                  {advertWatch.name}
                </div>
              </div>
            ))
          }
          
        </div>
      </div>
    </div>
    </div>
  )
}
