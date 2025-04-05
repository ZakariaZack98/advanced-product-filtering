import React from 'react'

const FilterOpt = ({name, changeHandler}) => {
  return (
    <div className='flex gap-2'>
      <input type="checkbox" id={name} name={name} onChange={e => changeHandler(e)}/>
      <label htmlFor={name} className='font-sm'>{name}</label>
    </div>
  )
}

export default FilterOpt
