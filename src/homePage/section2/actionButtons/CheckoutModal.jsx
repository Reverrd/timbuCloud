import advertWatchData from "../../../data/advertWatch";
import "../section2.scss";
import PropTypes from "prop-types";

export default function CheckoutModal({ ispay, setIsPay }) {
  const continueShopping = () => {
    setIsPay(!ispay);
  };                                  
  return (
    <div className="w-full  relative   h-auto flex justify-center items-center   ">
      {/* Overall card */}
      <div className="modalBackground hide-scrollbar  rounded-[36px] flex flex-col justify-between mt-[200px] pt-[100px] pb-[50px] h-[100vh] overflow-y-scroll  ">
        {/* Top section ------------------------------------------------------------------------------- */}
        <div className=" flex justify-center flex-col md:flex-row items-center w-full px-2 gap-4">
          {/* Order summary ------------------------------------------------------------------------- */}
          <div className="py-[48px] px-[24px] bg-[#FDFDFD] rounded-[16px] w-full ">
            <div className=" lg:w-[28vw] lg:h-[40vh]  flex flex-col px-[20px] lg:pt-[60px] items-center">
              <h1 className="text-[2.5vw] font-extrabold text-2xl ">Order Summary</h1>
              <div className="flex">
                <span>
                  <img src={"/"} alt="" />
                </span>
                <span className="text-[16px] font-semibold text-2xl">{"name of product"}</span>
              </div>
              <p className="text-[2.5vw] text-3xl">
                <span>Total:</span>
                <span className="productPrice text-[#E53400] ">
                  N{"429,700"}
                </span>
              </p>
            </div>
          </div>
          {/* Payment Sections -------------------------------------------------------------------------------- */}
          <div className="bg-[#FDFDFD] rounded-[16px]  py-[48px] px-[24px] w-full ">
            <div className=" lg:w-[28vw] w-full">
              <h1>Make Payment</h1>
              {/* Form starts */}
              <div>
                <form action="POST" className=" flex items-center   flex-col gap-3 ">
                  
                    <input
                      type="text"
                      placeholder="FullName"
                      className="input px-4 py-2 shadow-xl  border-0  outline-none bg-slate-100 rounded-lg w-full input-bordered "
                    />
                  
                  
                  <input
                      type="text"
                      placeholder="Card details"
                      className="input px-4 py-2 shadow-xl border-0 outline-none bg-slate-100 w-full rounded-lg input-bordered  "
                    />
                 
                  <div className="flex flex-col">
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
              {/* Form Ends */}
              <div>some writeups</div>
            </div>
          </div>
        </div>
        <div>{}</div>
        <div className=" flex justify-center">
          <button
            onClick={continueShopping}
            className="continueShoppingBtn text-[1.5vw] bg-[#F24E1E] rounded-[8px] py-[15px]"
          >
            Continue Shopping
          </button>
        </div>
        {/* advertSession */}
        <div>
          <h2 className="font pl-[65px]">
            Check out many other items from the store
          </h2>
          <div className="flex  justify-center">
            {advertWatchData.map((advertWatch) => (
              <div
                className="bg-[#FDFDFD] rounded-[30px] p-4 mx-[12px] flex flex-col items-center"
                key={advertWatch.id}
              >
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
  setIsPay: PropTypes.bool.isRequired,
};
