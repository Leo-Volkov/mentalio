import React, {useRef, useState} from 'react'
import ButtonAuthCommon from '../../../UI/ButtonAuthCommon/ButtonAuthCommon'
import PropTypes from 'prop-types'
import {useDispatch, useSelector} from 'react-redux'
import {verificationCode_resetPassword} from '../../../../../store/features/auth/authThunks.js'


const GroupResetOTP = ({setLevel, login, token_resetPassword}) => {
	const [otp, setOtp] = useState(['', '', '', '']) // Состояние для хранения значений полей
	const inputRefs = useRef([]) // Рефы для управления фокусом на полях
	const [disabled, setDisabled] = useState(false)
	const dispatch = useDispatch()
	const {loading, error} = useSelector((state) => state.auth)
	
	const [isError, setIsError] = useState(false)
	
	const handleChange = (value, index) => {
		const newOtp = [...otp]
		newOtp[index] = value.slice(-1) // Ограничиваем ввод до 1 символа
		setOtp(newOtp)
		
		// Переход к следующему полю, если введено значение
		if (value && index < inputRefs.current.length - 1) {
			inputRefs.current[index + 1].focus()
		}
	}
	
	const handleKeyDown = (e, index) => {
		// Удаление значения и переход к предыдущему полю на Backspace
		if (e.key === 'Backspace' && !otp[index] && index > 0) {
			inputRefs.current[index - 1].focus()
		}
	}
	
	const handleSubmit = async (e) => {
		setIsError(false)
		e.preventDefault()
		const otpCode = otp.join('')
		if (otpCode.length === otp.length) {
			
			// Здесь можно вызвать action для проверки кода, например dispatch(verification(otpCode))
			setIsError(false)
			setDisabled(true)
			const data = await dispatch(verificationCode_resetPassword({otpCode, login, token_resetPassword})).unwrap()
			if (data.status === 'success') {
				setLevel(2)
			} else {
				setIsError(true)
				setDisabled(false)
			}
		} else {
			setIsError(true)
		}
	}
	
	return (
		<form onSubmit={handleSubmit} className="w-full xs:w-[490px] mx-auto text-center">
			<div
				className="flex items-center justify-center gap-[7px] xs:gap-[17px] mb-[35px] xs:mb-[40px]">
				{otp.map((value, index) => (
					<input
						key={index}
						type="text"
						inputMode="numeric"
						maxLength={1}
						value={value}
						onChange={(e) => handleChange(e.target.value, index)}
						onKeyDown={(e) => handleKeyDown(e, index)}
						ref={(el) => (inputRefs.current[index] = el)} // Привязываем input к рефу
						className="w-full xs:w-[110px] aspect-square flex items-center bg-[#4C4C4C99] border border-[#8A8A8A80] rounded-[20px] outline-none text-center text-[24px] font-bold"
					/>
				))}
			</div>
			{(error || isError) && <div className="text-[12px] xs:text-[16px] text-[#FF0000] mb-[20px] text-center">{isError ? "Заполните все поля" : error}</div>}
			<ButtonAuthCommon type="submit" isLoading={loading} disabled={disabled}>
				Продолжить
			</ButtonAuthCommon>
			<div
				className="text-[12px] xs:text-[16px] font-[400] text-[#00C724] text-left mt-[5px] xs:mt-[10px]">
				Мы отправим код на ваш email или телефон
			</div>
		</form>
	)
}

GroupResetOTP.propTypes = {
	setLevel: PropTypes.func.isRequired,
	login: PropTypes.string.isRequired,
	token_resetPassword: PropTypes.string.isRequired
}
export default GroupResetOTP