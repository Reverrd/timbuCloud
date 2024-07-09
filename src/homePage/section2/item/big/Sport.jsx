/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import sportsData from '../../../../data/sportsData'
import CheckoutModal from '../../actionButtons/CheckoutModal';

const Sport = () => {
  const [ispay, setIsPay] = useState(false);
  const [cartCounts, setCartCounts] = useState({}); // Initialize an empty object

  const handleAddToCart = (id) => {
    setCartCounts((prevCounts) => ({...prevCounts, [id]: (prevCounts[id] || 0) + 1 }));
  };

  const handleRemoveFromCart = (id) => {
    setCartCounts((prevCounts) => {
      const count = prevCounts[id] || 0;
      if (count > 0) {
        return {...prevCounts, [id]: count - 1 };
      }
      return prevCounts;
    });
  };

  const handlePay = () => {
    setIsPay(true);
  };

  return (
    <div>
      <div className="pb-10">
        <div className=" flex justify-center">
          <div className="w-[6rem] mr-4   flex justify-center items-center">
            <div className="category py-4 px-10 whitespace-nowrap">
              SPORTS/GAMES
            </div>
          </div>
          <div className="flex gap-4">
            {sportsData.map((sport) => (
              <div
                key={sport.id}
                className="p-4 bg-[#FDFDFD] rounded-3xl w-[348px]"
              >
                <div className="flex">
                  <img src={sport.image} alt="" />
                  <div className=" w-full flex flex-col justify-center items-center">
                    <div className="  ">
                      <div
                        className="cursor-pointer"
                        onClick={() => handleRemoveFromCart(sport.id)}
                      >
                        <img
                          className="mb-4 w-[1.9vw]"
                          src="./assets/minus.png"
                          alt=""
                        />
                      </div>
                      <div
                        className="cursor-pointer"
                        onClick={() => handleAddToCart(sport.id)}
                      >
                        <img
                          className="w-[1.9vw] mb-4 "
                          src="./assets/add.png"
                          alt=""
                        />
                      </div>
                      <div>
                        <img className="w-[1.9vw]" src="./assets/love.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cardName  text-[#19191D]">{sport.name}</div>
                <div className="cardName  text-[#19191D]">{sport.type}</div>
                <div className="cardPrice">N{sport.price}</div>
                <div className="flex justify-between items-center">
                  <div className="cardPayBtn">
                    <button
                      onClick={() => handlePay(sport.id)}
                      className="bg-[#20AF48]"
                    >
                      Pay Now
                    </button>
                  </div>
                  <div>
                    <div className="border-2 border-[#F24E1E] rounded-[40px] flex items-center px-7 py-2 ">
                      <span>
                        <img src="./assets/cart2.png" alt="" />
                      </span>

                      <span className="ml-4 border rounded-sm border-[#6D6D6D] w-5 h-4 flex justify-center items-center">
                        <span className="f font-medium">{cartCounts[sport.id] || 0}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {ispay && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <CheckoutModal ispay={ispay} setIsPay={setIsPay} />
        </div>
      )}
    </div>
  )
}

export default Sport