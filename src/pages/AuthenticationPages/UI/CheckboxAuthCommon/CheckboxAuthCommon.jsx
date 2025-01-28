import React from 'react';
import PropTypes from 'prop-types';
import './CheckboxAuthCommon.css';

const CheckboxAuthCommon = ({
	                            name,
	                            checked,
	                            onChange,
	                            error,
	                            touched,
	                            label = '',
	                            children,
	                            className = '',
	                            ...props
                            }) => {
	return (
		<div className={`mt-4 ${className}`}>
			<label className="flex items-center space-x-3 cursor-pointer">
				<input
					type="checkbox"
					name={name}
					checked={checked}
					onChange={onChange}
					className="w-6 h-6 appearance-none border-2 border-gray-300 rounded-md checked:bg-blue-500 checked:border-blue-500 focus:ring-2 focus:ring-blue-300 transition duration-200"
					{...props}
				/>
				<p className="text-base font-medium">{children || label}</p>
			</label>
			{touched && error && (
				<div className="text-red-500 text-sm mt-1">{error}</div>
			)}
		</div>
	);
};

CheckboxAuthCommon.propTypes = {
	name: PropTypes.string.isRequired,
	checked: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
	error: PropTypes.string,
	touched: PropTypes.bool,
	label: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node,
};

export default CheckboxAuthCommon;
