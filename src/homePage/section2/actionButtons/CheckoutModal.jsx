import React, { useState } from "react";
import advertWatchData from "../../../data/advertWatch";
import "../section2.scss";
import PropTypes from "prop-types";
import AlertContainer from "./AlertContainer";


export default function CheckoutModal({ ispay, setIsPay }) {
 const [notify, setNotify] = useState(false)

  const continueShopping = () => {
    setIsPay(ispay);
  };

  const handlePayNow = (e) => {
    e.preventDefault()
    setNotify(!notify);
  };

  return (
    <div className="w-full z-[1000] relative h-auto flex justify-center items-center">
      {/* Overall card */}
      <div className="modalBackground hide-scrollbar rounded-[36px] flex flex-col justify-between mt-[200px] pt-[100px] pb-[50px] h-[100vh] overflow-y-scroll">
        {/* Top section */}
        <div className="flex justify-center flex-col md:flex-row items-center w-full px-2 gap-4">
          {/* Order summary */}
          <div className="py-[48px] px-[24px] bg-[#FDFDFD] rounded-[16px] w-full">
            <div className="lg:w-[28vw] lg:h-[40vh] flex flex-col px-[20px] lg:pt-[60px] items-center">
              <h1 className="text-[2.5vw] font-extrabold text-2xl">Order Summary</h1>
              <div className="flex">
                <span>
                  <img src={"/"} alt="" />
                </span>
                <span className="text-[16px] font-semibold text-2xl">{"name of product"}</span>
              </div>
              <p className="text-[2.5vw] text-3xl">
                <span>Total:</span>
                <span className="productPrice text-[#E53400]">N{"429,700"}</span>
              </p>
            </div>
          </div>
          {/* Payment Sections */}
          <div className="bg-[#FDFDFD] rounded-[16px] py-[48px] px-[24px] w-full">
            <div className="lg:w-[28vw] w-full text-center">
              <h1 className="font-extrabold text-2xl">Make Payment</h1>
              {/* Form starts */}
              <React.Fragment key="payment-form">
                <form onSubmit={handlePayNow} className="flex items-center flex-col gap-3">
                  <input
                    type="text"
                    placeholder="FullName"
                    className="input px-4 py-2 shadow-xl border-0 outline-none bg-slate-100 rounded-lg w-full input-bordered"
                  />
                  <input
                    type="text"
                    placeholder="Card details"
                    className="input px-4 py-2 shadow-xl border-0 outline-none bg-slate-100 w-full rounded-lg input-bordered"
                  />
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="input bg-slate-100 w-full rounded-lg input-bordered input-primary max-w-xs"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="input bg-slate-100 w-full rounded-lg py-2 px-2 input-bordered input-primary max-w-xs"
                    />
                  </div>
                  <button className="text-[2.5vw] bg-[#20AF48] font-bold my-4 w-full text-[#fdfdfd] rounded-3xl px-4 py-2">
                    Pay Now
                  </button>
                  
            
              <div className="font-bold text-[#8E8E8E]">
                By clicking on any “Continue” button, you agree to timbu <span className="text-[#565CEE]">Terms and Conditions</span> and <span className="text-[#565CEE]">Privacy Policy.</span>
              </div>
                  
             
              </form>
                </React.Fragment>
              {/* Form Ends */}
            </div>
          </div>
        </div>
        <div>{}</div>
        {
                    notify ? ( <AlertContainer notify={notify} setNotify={setNotify} />): null
                 
                  }
        <div className="flex justify-center my-4">
          <button onClick={continueShopping} className="continueShoppingBtn text-[3.5vw] bg-[#F24E1E] rounded-3xl px-7 py-[15px]">
            Continue Shopping
          </button>
        </div>
        {/* advertSession */}
        <div>
          <h2 className="text-[4vw] pb-4 pl-3 md:pl-[65px]">Check out many other items from the store</h2>
          <div className="flex justify-center">
            {advertWatchData.map((advertWatch) => (
              <div className="bg-[#FDFDFD] rounded-[30px] p-4 mx-[12px] flex flex-col items-center" key={advertWatch.id}>
                <img src={advertWatch.image} alt="" />
                <div id="adWatchtext">{advertWatch.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

CheckoutModal.propTypes = {
  ispay: PropTypes.bool.isRequired,
  setIsPay: PropTypes.func.isRequired,
};
