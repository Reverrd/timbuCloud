/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import smartWatchData from "../../../../data/smartwatchData";
import CheckoutModal from "../../actionButtons/CheckoutModal";

const Smartwatches = () => {
  const [ispay, setIsPay] = useState(false);
  const [addCart, setAddCart] = useState(0);
  const countCartAdd = () => {
    setAddCart(addCart + 1);
  };
  const countCartMinus = () => {
    if (addCart >= 0) {
      setAddCart(addCart - 1);
    }
    if (addCart < 0) {
      return 0;
    }
  };
  const handlePay = () => {
    setIsPay(true);
  };
  return (
    <div>
      <div>
        <div className="mobileCategory mb-6">
          <h1>SMARTWATCHES</h1>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {smartWatchData.map((smartWatch) => (
            <div key={smartWatch.id} className=" p-4  bg-[#FDFDFD] rounded-3xl">
              <div className="flex justify-between items-center pb-2">
                <img className="w-[28vw] " src={smartWatch.image} alt="" />
                <div className="  ">
                  <div
                    className="cursor-pointer"
                    onClick={() => countCartMinus(smartWatch.id)}
                  >
                    <img
                      className="mb-4 w-[3.9vw]"
                      src="./assets/minus.png"
                      alt=""
                    />
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => countCartAdd(smartWatch.id)}
                  >
                    <img
                      className="w-[3.9vw] mb-4 "
                      src="./assets/add.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <img className="w-[3.9vw]" src="./assets/love.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="mobileName ">{smartWatch.name}</div>
              <div className="mobileName pb-2">{smartWatch.type}</div>
              <div className="mobilePrice">N{smartWatch.price}</div>
              <div className="flex items-center">
                <div>
                  {/*  */}
                  <img className="w-[10vw]" src="./assets/Cart.png" alt="" />
                </div>
                <div className="w-4 h-4 border text-[2vw] border-black">{addCart}</div>
                <div className="md:pl-4 xxs:pl-1">
                  <button
                    onClick={handlePay}
                    className="mobileBtn bg-[#20AF48] md:rounded-[36px] xxs:rounded-[16px] md:px-4 xxs:px-2 py-2 text-[#FDFDFD] text-[3vw]"
                  >
                    Pay now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {ispay && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <CheckoutModal ispay={ispay} setIsPay={setIsPay} />
        </div>
      )}
    </div>
  );
};

export default Smartwatches;
