import React, { ReactNode } from 'react'

import styles from './FormInput.module.scss'

interface FormInputProps {
	validationSchema: any
	type: string
	labelTitle: string
	error: ReactNode
	anotherClass?: string
	inputType: 'primary' | 'secondary'
}

const FormInput: React.FC<FormInputProps> = props => {
	const {
		validationSchema,
		type,
		labelTitle,
		error,
		anotherClass = '',
		inputType = 'primary',
	} = props
	return (
		<label className={`${styles.FormInput} ${anotherClass}`}>
			{inputType === 'primary' && <span>{labelTitle}</span>}
			<input
				{...validationSchema}
				type={type}
				className="input-reset"
				placeholder={inputType === 'secondary' ? labelTitle : ''}
			/>
			{error && <div style={{ color: 'red' }}>{error}</div>}
		</label>
	)
}

export default FormInput
