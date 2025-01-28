import React, {useMemo, useState} from 'react'
import Sider from '../../UI/Sider/Sider.jsx'
import { GiHamburgerMenu } from "react-icons/gi";
import { Outlet } from 'react-router';
import {useDispatch, useSelector} from 'react-redux'
import {getUserFiles} from '../../store/features/userFiles/userFilesThunks.js'
import MiniNavbar from './components/MiniNavbar/MiniNavbar.jsx';

function Main() {
	
	// для open & close sider
	const [isOpen, setIsOpen] = useState(true);
	
	const toggleSider = () => {
    setIsOpen(!isOpen);
  };
	
	return (
		<main className="">
			<div className={`flex items-start pr-0 sm:pr-[30px] pb-24 md:pb-0 relative`}>
				{/* Меню слева 1 для всех страниц */}
				<div className='hidden md:block'>
					<div className={`w-[250px] xl:w-[285px] ${isOpen ? '' : 'hidden'}`}>
						<Sider
							isOpen={isOpen}
							toggleSider={toggleSider}
						/>
					</div>
				</div>
				{/* для открытия меню */}
				{isOpen === false ? (
					<div className="h-[100vh] pt-[42px] pl-[25px] fixed cursor-pointer"
					     onClick={toggleSider}>
						<GiHamburgerMenu/>
					</div>
				) : ''}
				
				{/* основное контент */}
				<div className="w-full sm:w-auto sm:flex-1 mx-7 sm:ml-12 xl:ml-[60px] mt-10 sm:mt-[60px] pb-5">
					{/* Подстраницы */}
					<Outlet />
					{/* === */}
				</div>

				{/* Mini Navbar */}
				<MiniNavbar />
			</div>
		</main>
	)
}
export default Main