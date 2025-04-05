import React from 'react'

const ButtonPrimary = ({label, clickHandler}) => {
  return (
    <button className='max-w-full py-1.5 px-5 bg-black text-white text-sm font-semibold rounded-md cursor-pointer hover:bg-blue-800 duration-300' onClick={e => clickHandler(e)}>
      {label}
    </button>
  )
}

export default ButtonPrimary
