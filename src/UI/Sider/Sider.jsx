import React from 'react'
import test from '/images/test.jpg'
import SiderMenu from './components/SiderMenu/SiderMenu.jsx'
import { GiHamburgerMenu } from 'react-icons/gi'
import PropTypes from 'prop-types'

const Sider = ({ toggleSider }) => {
  return (
    <nav>
      <aside className={`w-[250px] xl:w-[285px] h-[100vh] bg-[#F6F6F6] pt-[33px] pl-[25px] pr-[15px] fixed z-[10]`}>
        {/* Sider top (user info + burger button) */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <img src={test} alt="avatar" className="w-[24px] aspect-square object-cover rounded-full" />
            <span className="font-unbounded text-[1.25rem]">Alexander</span>
          </div>
          {/* burger button */}
          <div className="cursor-pointer" onClick={toggleSider}>
            <GiHamburgerMenu />
          </div>
        </div>

        {/* Sider Menu */}
        <div className="mt-[23px]">
          <SiderMenu />
        </div>

        <p className="absolute bottom-[17px] left-[50%] translate-x-[-50%] text-siderGray">Mentalio Ltd.</p>
      </aside>
    </nav>
  )
}

Sider.propTypes = {
  toggleSider: PropTypes.func.isRequired,
}

export default Sider
