import React from 'react'
import logo from '/images/logo.svg'

const Logo = () => {
  // Логотип
  return (
    <img src={logo} alt="Логотип Mentalio" className='w-full h-full object-cover'/>
  )
}

export default Logo