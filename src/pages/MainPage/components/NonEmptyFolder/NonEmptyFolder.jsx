import React from 'react'
import happy_folder from '/images/happy_folders.png'
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router';
import Folder from './UI/Folder/Folder';
import sad_folder from "/images/sad_folders.png"
import ButtonAddFolderPlus from '../../UI/ButtonAddFolderPlus/ButtonAddFolderPlus';
const NonEmptyFolder = () => {
  return (
    <>
      <section className="w-full sm:w-[99%] flex items-center justify-center lg:justify-between hidden">
        {/* добавить новую папку */}
        <div className="hidden lg:block">
          <h3 className='text-[32px] font-bold mb-[15px]'>Добавить папку</h3>

          <div className="w-[210px] h-[102px] rounded-[15px] bg-[#D1FFBAE5] flex items-center justify-center relative">
            <img src={happy_folder} alt="" className='w-[130px] h-[80px] object-contain'/>

            {/* кнопка для добавления новую папку */}
            <ButtonAddFolderPlus />
          </div>
        </div>


        {/* готовые папки пользователя */}
        <div className="">
          <div className="flex items-center justify-between mb-[15px]">
            <h3 className='text-base sm:text-[32px] font-bold'>Мои папки</h3>
            <Link to="/my-folders" className='inline-block py-0 sm:py-[12px] px-0 sm:px-[18px] sm:bg-[#001E02] rounded-[10px] text-[10px] sm:text-base text-[#6B6868] sm:text-[#fff]'>Смотреть все</Link>
          </div>

          <div className="w-full sm:w-[630px] flex items-center gap-[10px]">
            {/* готовые папки*/}
            <Folder 
              title={'Анатомия'}
              date={'От 07.12.2024'}
            />
            <Folder 
              title={'Анатомия'}
              date={'От 07.12.2024'}
            />
          </div>

          {/* появляется на телефоне */}
          <div className="block lg:hidden w-fit relative mt-[15px] mx-auto">
            <div className='w-[127px] sm:w-[200px] h-[77px] xs:h-[110px] truncate'>
              <img src={sad_folder} alt="" className='w-full h-full object-contain'/>
            </div>

            {/* кнопка для добавления новую папку */}
            <ButtonAddFolderPlus />
          </div>
        </div>
      </section>
    </>
  )
}

export default NonEmptyFolder