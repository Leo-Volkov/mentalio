import React from 'react'

const CategoryItem = ({ title }) => {
  return (
    <>
      <button className="w-auto sm:w-[180px] h-[28px] sm:h-[40px] text-[11px] sm:text-[18px] bg-userFolder flex items-center justify-center rounded-[10px] sm:rounded-2xl">
        {title}
      </button>
    </>
  )
}

export default CategoryItem