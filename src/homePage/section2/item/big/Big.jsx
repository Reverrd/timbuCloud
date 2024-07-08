/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Smallwatches from "./Smallwatches";
import Luxury from "./Luxury";
import Sport from "./Sport";
import CheckoutModal from "../../actionButtons/CheckoutModal";

const Big = () => {
  const [ispay, setIsPay] = useState(false);
  const handlePay = () => {
    setIsPay(true);
  };
  return (
    <div className="xxs:hidden smd:flex flex-col justify-between relative">
      <div className="">
        <Smallwatches />
        <Luxury />
        <Sport />
      </div>
      {ispay && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <CheckoutModal ispay={ispay} setIsPay={setIsPay} />
          </div>
        )}
    </div>
  );
};

export default Big;
