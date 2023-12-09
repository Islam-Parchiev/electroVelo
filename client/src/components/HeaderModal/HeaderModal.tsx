import React from 'react'

import styles from './HeaderModal.module.scss'

interface HeaderModalProps {
	children:any;
	otherClasses?:any;
}

const HeaderModal:React.FC<HeaderModalProps> = (props) => {
	const {
		children,
		otherClasses,
	} = props;
	const classes = otherClasses?otherClasses:''; 
	return (
		<div className={`${styles.HeaderModal} ${classes}`}>
			{children}
		</div>
	)
}

export default HeaderModal
