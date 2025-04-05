import React from 'react'
import FilterOpt from '../common/FilterOpt'

const FilterSec = ({filterparamsArr, filterBy}) => {
  return (
    <div className='p-2 rounded-sm bg-white'>
      <h4 className='text-gray-400 font-semibold pb-2 border-b-gray-400 border-b-2'>{filterBy}</h4>
      <div className="filterOptions py-2">
        {
          filterparamsArr?.map(param => <FilterOpt key={param} param={param}/>)
        }
      </div>
    </div>
  )
}

export default FilterSec
