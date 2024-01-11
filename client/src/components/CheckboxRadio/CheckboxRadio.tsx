import React from 'react'

import styles from './CheckboxRadio.module.scss'

interface CheckboxRadioProps {
	radioValue: string
	radioName: string
	checked?: boolean
	title: string
}

const CheckboxRadio: React.FC<CheckboxRadioProps> = props => {
	const { radioValue = 'test', radioName = 'test', checked, title = 'test' } = props
	return (
		<label htmlFor={radioValue} className={styles.CheckboxRadio}>
			<input
				type="radio"
				name={radioName}
				id={radioValue}
				value={radioValue}
				className="input-reset"
				checked={checked}
			/>
			{title}
		</label>
	)
}

export default CheckboxRadio
