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
                    onClick={() => countCartMinus(luxuryTime.id)}
                  >
                    <svg
                      className="mb-4 w-[3.9vw]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 15"
                      fill="none"
                    >
                      <rect
                        y="0.5"
                        width="14"
                        height="14"
                        rx="2"
                        fill="#20AF48"
                      />
                      <path
                        d="M10.75 6.5H3.25C2.91848 6.5 2.60054 6.60536 2.36612 6.79289C2.1317 6.98043 2 7.23478 2 7.5C2 7.76522 2.1317 8.01957 2.36612 8.20711C2.60054 8.39464 2.91848 8.5 3.25 8.5H10.75C11.0815 8.5 11.3995 8.39464 11.6339 8.20711C11.8683 8.01957 12 7.76522 12 7.5C12 7.23478 11.8683 6.98043 11.6339 6.79289C11.3995 6.60536 11.0815 6.5 10.75 6.5Z"
                        fill="#FDFDFD"
                      />
                    </svg>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => countCartAdd(luxuryTime.id)}
                  >
                    <svg
                      className="w-[3.9vw] mb-4 "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 15"
                      fill="none"
                    >
                      <rect
                        y="0.5"
                        width="14"
                        height="14"
                        rx="2"
                        fill="#20AF48"
                      />
                      <path
                        d="M9.875 5.875H7.625V3.625C7.625 3.32663 7.50647 3.04048 7.29549 2.8295C7.08452 2.61853 6.79837 2.5 6.5 2.5C6.20163 2.5 5.91548 2.61853 5.70451 2.8295C5.49353 3.04048 5.375 3.32663 5.375 3.625L5.41494 5.875H3.125C2.82663 5.875 2.54048 5.99353 2.3295 6.20451C2.11853 6.41548 2 6.70163 2 7C2 7.29837 2.11853 7.58452 2.3295 7.79549C2.54048 8.00647 2.82663 8.125 3.125 8.125L5.41494 8.08506L5.375 10.375C5.375 10.6734 5.49353 10.9595 5.70451 11.1705C5.91548 11.3815 6.20163 11.5 6.5 11.5C6.79837 11.5 7.08452 11.3815 7.29549 11.1705C7.50647 10.9595 7.625 10.6734 7.625 10.375V8.08506L9.875 8.125C10.1734 8.125 10.4595 8.00647 10.6705 7.79549C10.8815 7.58452 11 7.29837 11 7C11 6.70163 10.8815 6.41548 10.6705 6.20451C10.4595 5.99353 10.1734 5.875 9.875 5.875Z"
                        fill="#FDFDFD"
                      />
                    </svg>
                  </div>
                  <div className="cursor-pointer">
                    <svg
                      className="w-[3.9vw]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 15"
                      fill="none"
                    >
                      <path
                        d="M10.2002 9.83801C9.44682 10.6602 8.48627 11.6448 7.31537 12.7937C7.31513 12.7939 7.31488 12.7941 7.31464 12.7944L7 13.1018L6.68566 12.7947C6.68532 12.7943 6.68497 12.794 6.68463 12.7937C5.51418 11.6443 4.55347 10.6595 3.79935 9.83757C3.04984 9.02067 2.47086 8.30561 2.05142 7.68997C1.63151 7.07365 1.36578 6.54679 1.22317 6.10537C1.0745 5.64523 1.00042 5.17659 1 4.69577C1.00008 3.72405 1.29108 2.97526 1.83935 2.37769C2.38308 1.78507 3.0307 1.5 3.85 1.5C4.29629 1.5 4.7183 1.60135 5.12805 1.81039C5.53997 2.02054 5.90025 2.31812 6.21145 2.71715L7 3.72827L7.78855 2.71715C8.09975 2.31812 8.46003 2.02054 8.87195 1.81039C9.2817 1.60135 9.70371 1.5 10.15 1.5C10.9693 1.5 11.6169 1.78507 12.1607 2.37769C12.709 2.97534 13 3.72426 13 4.69619C13 5.17628 12.9262 5.64486 12.7775 6.10562C12.6349 6.54716 12.3692 7.07373 11.949 7.68929C11.5288 8.30496 10.9495 9.02038 10.2002 9.83801Z"
                        stroke="#F24E1E"
                        strokeWidth="2"
                      />
                    </svg>
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
                <div className="pl-4">
                  <button
                    onClick={() => handlePay(luxuryTime.id)}
                    className="mobileBtn bg-[#20AF48] rounded-[36px] px-4 py-2 text-[#FDFDFD]"
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
