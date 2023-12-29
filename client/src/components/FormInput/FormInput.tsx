import React, { ReactNode } from 'react'

import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

import styles from './FormInput.module.scss'

interface FormInputProps {
	validationSchema:any;
	type:string;
	labelTitle:string;
	error:ReactNode;
	anotherClass?:string;
}

const FormInput: React.FC<FormInputProps> = props => {
	const {
		validationSchema,
		type,
		labelTitle,
		error,
		anotherClass='',
	} = props
	return (
		<label className={`${styles.FormInput} ${anotherClass}`}>
			<span>{labelTitle}</span>
			<input
				{...validationSchema}
				type={type}
				className="input-reset"
			/>
			{error && <div style={{ color: 'red' }}>{error}</div>}
		</label>
	)
}

export default FormInput
