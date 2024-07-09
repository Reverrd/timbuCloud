// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Smartwatches from './Smartwatches'
import Luxury from './Luxury'
import CheckoutModal from '../../actionButtons/CheckoutModal'

const Small = () => {
  const [ispay, setIsPay] = useState(false);
  const handlePay = () => {
    setIsPay(true);
  };
  return (
    <div className=' xxs:flex flex-col smd:hidden px-[24px] pb-6  '>
      <div>

        <Smartwatches />
        <Luxury />
      </div>
      {ispay && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <CheckoutModal ispay={ispay} setIsPay={setIsPay} />
          </div>
        )}
    </div>
  )
}

export default Small
