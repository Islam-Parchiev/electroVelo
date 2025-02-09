import React from 'react'

import styles from './GuaranteesInfoItem.module.scss'

interface GuaranteesInfoItemProps {
	title:string;
	children:string;
}

const GuaranteesInfoItem: React.FC<GuaranteesInfoItemProps> = props => {
	const {
		title,
		children,
	} = props
	return (
		<li className={styles.GuaranteesInfoItem}>
			<span className={styles.GuaranteesInfoItem__title}>{title}</span>
			<span className={styles.GuaranteesInfoItem__price}>
				{children}
			</span>
		</li>
	)
}

export default GuaranteesInfoItem
