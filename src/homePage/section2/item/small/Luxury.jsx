/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import luxuryTimePieceData from "../../../../data/luxuryTimePieceData";
import CheckoutModal from "../../actionButtons/CheckoutModal";

const Luxury = () => {
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
        <div className="mobileCategory my-6">
          <h1>LUXURYTIME PIECE</h1>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {luxuryTimePieceData.map((luxuryTime) => (
            <div key={luxuryTime.id} className=" p-4  bg-[#FDFDFD] rounded-3xl">
              <div className="flex justify-between items-center pb-2">
                <img className="w-[28vw] " src={luxuryTime.image} alt="" />
                <div className="  ">
                  <div
                    className="cursor-pointer"
                    onClick={() => countCartMinus(luxuryTimePieceData.id)}
                  >
                    <img
                      className="mb-4 w-[3.9vw]"
                      src="./assets/minus.png"
                      alt=""
                    />
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => countCartAdd(luxuryTimePieceData.id)}
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
              <div className="mobileName ">{luxuryTime.name}</div>
              <div className="mobileName pb-2">{luxuryTime.type}</div>
              <div className="mobilePrice">N{luxuryTime.price}</div>
              <div className="flex items-center">
                <div>
                  <svg
                    className="w-[6vw]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 18 17"
                    fill="none"
                  >
                    <path
                      d="M17.7718 2.1775C17.6839 2.07704 17.5753 1.99646 17.4533 1.9412C17.3314 1.88594 17.1989 1.85728 17.0649 1.85714H4.14326L3.96092 0.776286C3.92462 0.559463 3.81205 0.362457 3.64323 0.220313C3.47441 0.0781678 3.26029 0.000101186 3.03895 0H0.935062C0.687068 0 0.449232 0.0978313 0.273873 0.271972C0.0985152 0.446113 0 0.682299 0 0.928571C0 1.17484 0.0985152 1.41103 0.273873 1.58517C0.449232 1.75931 0.687068 1.85714 0.935062 1.85714H2.24695L3.98617 12.2237L4.02825 12.3389L4.07874 12.4791L4.19095 12.6453L4.27978 12.7493L4.46025 12.87L4.56497 12.9304C4.67372 12.9755 4.79028 12.9991 4.90814 13H15.1948C15.4428 13 15.6806 12.9022 15.8559 12.728C16.0313 12.5539 16.1298 12.3177 16.1298 12.0714C16.1298 11.8252 16.0313 11.589 15.8559 11.4148C15.6806 11.2407 15.4428 11.1429 15.1948 11.1429H5.70107L5.54585 10.2143H16.1298C16.3548 10.2143 16.5723 10.1338 16.7423 9.98742C16.9124 9.84108 17.0236 9.63876 17.0555 9.41757L17.9906 2.91757C18.0095 2.78585 17.9998 2.65163 17.9621 2.52396C17.9243 2.39629 17.8594 2.27815 17.7718 2.1775ZM15.9868 3.71429L15.7203 5.57143H12.3896V3.71429H15.9868ZM11.4545 3.71429V5.57143H8.64933V3.71429H11.4545ZM11.4545 6.5V8.35714H8.64933V6.5H11.4545ZM7.71426 3.71429V5.57143H4.90908L4.77069 5.59929L4.45464 3.71429H7.71426ZM4.92217 6.5H7.71426V8.35714H5.23354L4.92217 6.5ZM12.3896 8.35714V6.5H15.5856L15.3191 8.35714H12.3896Z"
                      fill="#F24E1E"
                    />
                    <path
                      d="M6.31177 16.7142C7.0864 16.7142 7.71437 16.0906 7.71437 15.3213C7.71437 14.5521 7.0864 13.9285 6.31177 13.9285C5.53714 13.9285 4.90918 14.5521 4.90918 15.3213C4.90918 16.0906 5.53714 16.7142 6.31177 16.7142Z"
                      fill="#F24E1E"
                    />
                    <path
                      d="M14.7268 16.7142C15.5014 16.7142 16.1294 16.0906 16.1294 15.3213C16.1294 14.5521 15.5014 13.9285 14.7268 13.9285C13.9522 13.9285 13.3242 14.5521 13.3242 15.3213C13.3242 16.0906 13.9522 16.7142 14.7268 16.7142Z"
                      fill="#F24E1E"
                    />
                  </svg>
                </div>
                <div className="w-4 h-4 border text-[2vw] border-black">{addCart}</div>
                <div className="pl-4">
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

export default Luxury;
