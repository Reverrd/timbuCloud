/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import sportsData from '../../../../data/sportsData'
import CheckoutModal from '../../actionButtons/CheckoutModal';

const Sport = () => {
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
                        <button
                          className="decrease cursor-pointer"
                          onClick={() => countCartMinus(sport.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              width="24"
                              height="24"
                              rx="2"
                              fill="#20AF48"
                            />
                            <path
                              d="M18 9.5H6C5.46957 9.5 4.96086 9.71071 4.58579 10.0858C4.21071 10.4609 4 10.9696 4 11.5C4 12.0304 4.21071 12.5391 4.58579 12.9142C4.96086 13.2893 5.46957 13.5 6 13.5H18C18.5304 13.5 19.0391 13.2893 19.4142 12.9142C19.7893 12.5391 20 12.0304 20 11.5C20 10.9696 19.7893 10.4609 19.4142 10.0858C19.0391 9.71071 18.5304 9.5 18 9.5Z"
                              fill="#FDFDFD"
                            />
                          </svg>
                        </button>
                        <button
                          className="add mt-10"
                          onClick={() => countCartAdd(sport.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              width="24"
                              height="24"
                              rx="2"
                              fill="#20AF48"
                            />
                            <path
                              d="M18 9.5H14V5.5C14 4.96957 13.7893 4.46086 13.4142 4.08579C13.0391 3.71071 12.5304 3.5 12 3.5C11.4696 3.5 10.9609 3.71071 10.5858 4.08579C10.2107 4.46086 10 4.96957 10 5.5L10.071 9.5H6C5.46957 9.5 4.96086 9.71071 4.58579 10.0858C4.21071 10.4609 4 10.9696 4 11.5C4 12.0304 4.21071 12.5391 4.58579 12.9142C4.96086 13.2893 5.46957 13.5 6 13.5L10.071 13.429L10 17.5C10 18.0304 10.2107 18.5391 10.5858 18.9142C10.9609 19.2893 11.4696 19.5 12 19.5C12.5304 19.5 13.0391 19.2893 13.4142 18.9142C13.7893 18.5391 14 18.0304 14 17.5V13.429L18 13.5C18.5304 13.5 19.0391 13.2893 19.4142 12.9142C19.7893 12.5391 20 12.0304 20 11.5C20 10.9696 19.7893 10.4609 19.4142 10.0858C19.0391 9.71071 18.5304 9.5 18 9.5Z"
                              fill="#FDFDFD"
                            />
                          </svg>
                        </button>
                        <button className="heart mt-10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="23"
                            viewBox="0 0 24 23"
                            fill="none"
                          >
                            <path
                              d="M17.7315 15.7753C16.4834 17.1373 14.8967 18.7635 12.9681 20.6558C12.9678 20.6561 12.9675 20.6565 12.9671 20.6568L12 21.6018L11.0332 20.6571C11.0328 20.6567 11.0325 20.6564 11.0321 20.6561C9.10418 18.7628 7.51722 17.1363 6.2681 15.7749C5.02359 14.4185 4.05086 13.219 3.33892 12.1741C2.62651 11.1284 2.15648 10.2072 1.89777 9.40646C1.633 8.58697 1.50072 7.75049 1.5 6.89331C1.50008 5.15319 2.02734 3.76272 3.0481 2.65017C4.06433 1.54257 5.3007 1 6.825 1C7.66129 1 8.45455 1.19126 9.2168 1.58015C9.98122 1.97013 10.6453 2.52111 11.2114 3.24712L12 4.25825L12.7886 3.24712C13.3547 2.52111 14.0188 1.97013 14.7832 1.58015L14.3304 0.692511L14.7832 1.58015C15.5455 1.19126 16.3387 1 17.175 1C18.6993 1 19.9357 1.54257 20.9519 2.65017C21.9727 3.76281 22.5 5.15342 22.5 6.89373C22.5 7.74985 22.3681 8.58628 22.1033 9.40671C21.8447 10.2079 21.3745 11.1288 20.6615 12.1734C19.9485 13.218 18.9755 14.4179 17.7315 15.7753Z"
                              stroke="#F24E1E"
                              strokeWidth="2"
                            />
                          </svg>
                        </button>
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
                            <span className="f font-medium">{addCart}</span>
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
