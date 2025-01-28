import React from 'react'
import UserFolder from './UI/UserFolder/UserFolder'
import {FaPlus} from 'react-icons/fa'
import ButtonAddFolderPlus
	from '../../UI/ButtonAddFolderPlus/ButtonAddFolderPlus'

const MyFoldersPage = () => {
	return (
		<>
			<main className="w-full sm:w-auto">
				<h1
					className="text-[32px] sm:text-[46px] font-bold font-unbounded text-left sm:text-center leading-[39px] sm:leading-[57px]">
					Мои папки
				</h1>
				<p
					className="block sm:hidden text-[12px] font-medium text-[#6B6868] whitespace-pre-line leading-[14px] mt-[10px]">
					Здесь ты можешь посмотреть свои
					папки, а также добавить новую из
					каталога или создать лично
				</p>
				
				{/* Папки пользователя */}
				<div className="grid grid-cols-2 gap-[10px] sm:gap-5 mt-[40px] mb-5 sm:mb-[35px]">
					{/* компонент папки */}
					{/* 1 */}
					<UserFolder
						title={'Анатомия'}
						date={'07.12.2024'}
						description={'Учитесь темам , подобранным для подготовки к определенным ситуационным задачам'}
						link={'/ggg'}
					/>
					{/* 2 */}
					<UserFolder
						title={'Анатомия'}
						date={'07.12.2024'}
						description={'Учитесь темам , подобранным для подготовки к определенным ситуационным задачам'}
						link={'/ggg'}
					/>
					{/* 3 */}
					<UserFolder
						title={'Анатомия'}
						date={'07.12.2024'}
						description={'Учитесь темам , подобранным для подготовки к определенным ситуационным задачам'}
						link={'/ggg'}
					/>
				</div>
				
				<ButtonAddFolderPlus
					myFolderPage={true}
				/>
			</main>
		</>
	)
}

export default MyFoldersPage