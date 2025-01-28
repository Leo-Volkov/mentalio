import React from 'react'
import CategoryItem from './CategoryItem'

const Category = () => {
  // массив категорий
  const categoryItemData = [
    {
      title: "Медицина"
    },
    {
      title: "Химия"
    },
    {
      title: "Другое"
    },
    {
      title: "Точные науки"
    },
    {
      title: "Математика"
    },
    {
      title: "Информатика"
    }
  ]
  return (
    <>
      <div className='mt-8'>
        <h1 className="text-xl sm:text-[28px] font-bold">Категории</h1>

        <div className="w-full sm:w-[560px] grid grid-cols-3 gap-[10px] mt-[12px] sm:mt-5">
          {/* Элементы сортировки */}
          {
            categoryItemData.map((item, index) => (
              <CategoryItem 
                key={index}
                title={item.title}
              />
            ))
          }
          
        </div>
      </div>
    </>
  )
}

export default Category