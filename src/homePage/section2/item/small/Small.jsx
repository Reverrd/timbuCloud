// eslint-disable-next-line no-unused-vars
import React from 'react'
import Smartwatches from './Smartwatches'
import Luxury from './Luxury'

const Small = () => {
  return (
    <div className=' xxs:flex flex-col smd:hidden px-[24px] pb-6  '>
        <Smartwatches />
        <Luxury />
    </div>
  )
}

export default Small
