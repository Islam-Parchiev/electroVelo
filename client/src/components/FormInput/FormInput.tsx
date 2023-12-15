import React from 'react'

import styles from './FormInput.module.scss'

interface FormInputProps {
	validationSchema:any;
	type:string;
	labelTitle:string;
	error:any;
}

const FormInput: React.FC<FormInputProps> = props => {
	const {
		validationSchema,
		type,
		labelTitle,
		error,
	} = props
	return (
		<label className={styles.FormInput}>
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
