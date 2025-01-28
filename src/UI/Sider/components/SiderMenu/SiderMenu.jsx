import React from 'react'
import sider1 from '/images/sider_1.png'
import sider2 from '/images/sider_2.png'
import sider3 from '/images/sider_3.png'
import sider4 from '/images/sider_4.png'
import sider4_active from './assets/sider_4_active.png'
import sider5 from '/images/sider_5.png'
import sider5_active from './assets/sider_5_active.png'
import sider6 from '/images/sider_6.png'
import sider7 from '/images/sider_7.png'
import sider8 from '/images/sider_8.png'
import sider9 from '/images/sider_9.png'
import sider10 from '/images/sider_10.png'
import sider11 from '/images/sider_11.png'
import sider12 from '/images/sider_12.png'
import SiderMenuItem from '../SiderMenuItem/SiderMenuItem.jsx'
import SiderMenuCategory from '../SiderMenuCategory/SiderMenuCategory.jsx'
const SiderMenu = () => {
  // данные для меню
  const menuData = [
    {
      title: 'Мои папки',
      subtitle: 'ctrl+f',
      link: '/',
      image: sider4,
      imageActive: sider4_active,
    },
    {
      title: 'Каталог',
      subtitle: '',
      link: '/catalog',
      image: sider5,
      imageActive: sider5_active,
    },
    {
      title: 'Текущие курсы',
      subtitle: 'скоро',
      link: '/current-rates',
      image: sider6,
      inDevelopment: true,
    },
    {
      title: 'База знаний',
      subtitle: 'скоро',
      link: '/knowledge-base',
      image: sider7,
      inDevelopment: true,
    },
    {
      title: 'Цепочка занятий',
      subtitle: 'скоро',
      link: '/chain-of-activities',
      image: sider8,
      inDevelopment: true,
    },
    {
      title: 'Уведомления',
      subtitle: 'скоро',
      link: '/notifications',
      image: sider9,
      inDevelopment: true,
    },
    {
      title: 'Прогресс',
      subtitle: 'скоро',
      link: '/progress',
      image: sider10,
      inDevelopment: true,
    },
    {
      title: 'Настройки',
      subtitle: '',
      link: '/settings',
      image: sider11,
    },
    {
      title: 'Искать по тегам',
      subtitle: '',
      link: '/search-by-tags',
      image: sider12,
    },
  ]
  return (
    <>
      {/* Основное */}
      <SiderMenuCategory category={'Основное'} image={sider1} />

      {/* Подкатегории Основное*/}
      <div className="flex flex-col gap-[10px] mb-[23px]">
        {menuData.slice(0, 5).map((item, index) => (
          <SiderMenuItem
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            link={item.link}
            image={item.image}
            imageActive={item.imageActive}
            inDevelopment={item.inDevelopment}
          />
        ))}
      </div>

      {/* Результаты */}
      <SiderMenuCategory category={'Результаты'} image={sider2} />

      {/* Подкатегории Результаты*/}
      <div className="flex flex-col gap-[10px] mb-[23px]">
        {menuData.slice(5, 7).map((item, index) => (
          <SiderMenuItem
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            link={item.link}
            image={item.image}
            imageActive={item.imageActive}
            inDevelopment={item.inDevelopment}
          />
        ))}
      </div>

      {/* Остальное */}
      <SiderMenuCategory category={'Остальное'} image={sider3} />

      {/* Подкатегории Остальное*/}
      <div className="flex flex-col gap-[10px]">
        {menuData.slice(7).map((item, index) => (
          <SiderMenuItem key={index} title={item.title} subtitle={item.subtitle} link={item.link} image={item.image} />
        ))}
      </div>
    </>
  )
}

export default SiderMenu
