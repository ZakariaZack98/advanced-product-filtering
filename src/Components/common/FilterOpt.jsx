import React from 'react'

const FilterOpt = ({param, changeHandler}) => {
  return (
    <div className='flex gap-x-2'>
      <input type="checkbox" id={param} param={param} onChange={e => changeHandler(e)}/>
      <label htmlFor={param} className='font-sm'>{param}</label>
    </div>
  )
}

export default FilterOpt
