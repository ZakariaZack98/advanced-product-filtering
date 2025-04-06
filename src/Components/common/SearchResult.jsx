import React from 'react'
import SearchResultCard from './SearchResultCard'

const SearchResult = ({matchedProducts}) => {
  return (
    <div className='absolute left-1/2 w-full shadow-xl' style={{transform: "translateX(-50%)"}}>
      {
        matchedProducts?.map(product => <SearchResultCard key={product.pid} pid={product.pid} imgUrl={product.imgUrl} name={product.name} retailPrice={product.retailPrice} offerPrice={product.offerPrice}/>)
      }
    </div>
  )
}

export default SearchResult
