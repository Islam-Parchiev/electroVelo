import React from 'react'

import styles from './FormInput.module.scss'

interface FormInputProps {
	title:string;
	anotherClass?:string;
}

const FormInput: React.FC<FormInputProps> = props => {
	const {
		title,
		anotherClass='',
	} = props
	return (
		<label className={`${styles.FormInput} ${anotherClass}`}>
			<span>{title}</span>
			<input type="text" className="input-reset" />
		</label>
	)
}

export default FormInput
