import React from 'react'
import { FaHome } from 'react-icons/fa'

const Directory = () => {
  return (
    <div className='flex justify-between pt-3'>
      <div className="directory flex items-center gap-x-5 ">
        <span>
          <FaHome/>
        </span>
        <span>/</span>
        <span>Components</span>
        <span>/</span>
        <span>Graphics Card</span>
      </div>
      <div>
      <span className='bg-blue-950 text-white px-5 ms-4 py-1  rounded-2xl text-sm'>Recent Offers</span>
      <span className='bg-blue-950 text-white px-5 ms-4 py-1 rounded-2xl text-sm'>Payment Discount</span>
      </div>
    </div>
  )
}

export default Directory
