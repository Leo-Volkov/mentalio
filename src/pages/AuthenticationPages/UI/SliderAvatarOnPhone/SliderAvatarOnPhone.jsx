import React from 'react'
import test from '/images/test.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
const SliderAvatarOnPhone = ({ avatar, handleAvatarSelect }) => {
  // swiper library for slider
  return (
    <>
      <Swiper slidesPerView={1.07} spaceBetween={10} className="mySwiper">
        {avatar.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={test}
              alt=""
              className="w-full h-[500px] object-cover rounded-[20px]"
              onClick={() => handleAvatarSelect(item.id)}
              style={{ border: item.chosen ? '2px solid green' : 'none' }}
            />
          </SwiperSlide>
        ))}
        {/* item 1 */}
      </Swiper>
    </>
  )
}
export default SliderAvatarOnPhone
