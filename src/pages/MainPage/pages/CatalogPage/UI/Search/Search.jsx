import React from 'react'
import Logo from '../Logo/Logo'
const Search = () => {
  return (
    <div className="flex items-center justify-between">
      <div className='w-[87%] sm:w-[90%] flex items-center gap-[5px]'>
        {/* Кнопка назад появляется на телефоне */}
        <button className="block sm:hidden py-[7px] px-[12px] text-[9px] font-medium bg-[#EEEEEE] rounded-[15px]">Назад</button>

        {/* Поле поиска */}
        <input 
          type="text" 
          className="flex-1 h-[26px] sm:h-[50px] text-[9px] sm:text-base border-0 sm:border border-black rounded-[20px] outline-none px-5 bg-[#eeeeee] sm:bg-transparent" 
          placeholder='Поиск...'
        />
      </div>

      <div className="w-[26px] sm:w-10 aspect-square rounded-full truncate">
        {/* Логотип */}
        <Logo />
      </div>
    </div>
  )
}

export default Search