import React, { useState } from 'react'
import sad_folder from '/images/sad_folders.png'
import { FaPlus } from 'react-icons/fa'
import ButtonAddFolderPlus from '../../UI/ButtonAddFolderPlus/ButtonAddFolderPlus'

const EmptyFolder = () => {
  return (
    <>
      <section className="flex justify-center">
        <div className="flex flex-col items-center">
          <span className="text-sm xs:text-lg lg:text-xl text-siderGray mb-[14px] 2xl:mb-4">У вас пока нету папок ...</span>
          <div className="relative">
            <div className="w-[127px] xs:w-[200px] lg:w-[250px] 2xl:w-[300px] h-[77px] xs:h-[110px] lg:h-[160px] 2xl:h-[190px] truncate">
              <img src={sad_folder} alt="" className="w-full h-full object-contain" />
            </div>

            {/* кнопка для добавления новую папку */}
            <ButtonAddFolderPlus isBig={true} />
          </div>
        </div>
      </section>
    </>
  )
}

export default EmptyFolder
