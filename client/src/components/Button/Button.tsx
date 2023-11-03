import React from 'react'

import styles from './Button.module.scss'

interface ButtonProps {
	otherClass?: string
	children: any
	handleClick?: () => void
}

const Button: React.FC<ButtonProps> = props => {
	const { otherClass, children, handleClick } = props
	return (
		<button
			className={`${styles.btnReset} ${styles.Button} ${otherClass}`}
			onClick={handleClick}>
			{children}
		</button>
	)
}

export default Button
