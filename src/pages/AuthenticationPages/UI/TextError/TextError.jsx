import React from 'react'

const TextError = ({error}) => {
  return (
    <div 
      className='text-[red] text-xs sm:text-sm text-left'
    >
      {error}
    </div>
  )
}

export default TextError