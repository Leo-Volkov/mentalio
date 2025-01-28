import React, {useState} from 'react'
import FolderDirectory from '../../components/FolderDirectory/FolderDirectory'
import Category from './UI/Category/Category'
import Search from './UI/Search/Search'
import ButtonShowMore from './UI/ButtonShowMore/ButtonShowMore'
const CatalogPage = () => {
  const [cart, setCart] = useState({
    title: 'Анатомия',
    desc: "Эта тема содержит все необходимые темы для подготовки к экзаменам в медицинских вузах",
  })
  return (
    <>
      {/* Поиск */}
      <Search />

      {/* Категории */}
      <Category />

      <div className="w-[98%] flex items-center justify-between flex-wrap gap-3 sm:gap-7 lg:gap-y-[30px] 2xl:gap-y-10 mt-5 sm:mt-[30px] pr-3 sm:pr-0">
        <FolderDirectory title={cart.title} desc={cart.desc}/>
        <FolderDirectory title={cart.title} desc={cart.desc}/>
        <FolderDirectory title={cart.title} desc={cart.desc}/>
        <FolderDirectory title={cart.title} desc={cart.desc}/>
      </div>

      {/* Кнопка Показать еще */}
      <div className='sm:text-center mt-5 sm:mt-10'>
        <ButtonShowMore />
      </div>
    </>
  )
}

export default CatalogPage