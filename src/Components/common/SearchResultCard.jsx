import React from 'react'

const SearchResultCard = ({pid, imgUrl, name, retailPrice, offerPrice}) => {
  return (
    <div className='w-full p-3 flex gap-x-4 bg-blue-950 text-white border-[1px] border-white cursor-pointer'>
      <picture className='bg-white'>
        <img src={imgUrl} alt="" className='w-15 h-15 object-cover object-center'/>
      </picture>
      <div className="textSec flex flex-col">
      <h3 className="text-sm font-semibold max-h-25px">{name}</h3>
      <div className="priceSec flex gap-x-3 my-2">
          <strike className="text-sm font-semibold text-red-500">{retailPrice}$</strike>
          <p className="text-sm font-semibold text-green-500">{offerPrice}$</p>
        </div>
      </div>
    </div>
  )
}

export default SearchResultCard
