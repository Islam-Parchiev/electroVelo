import React from 'react'

import styles from './InfoItem.module.scss'

interface InfoItemProps {
	title: string
}

const InfoItem: React.FC<InfoItemProps> = props => {
	const { title } = props
	return (
		<div className={styles.InfoItem}>
			<div className={styles.InfoItem__content}>
				<h2 className={styles.InfoItem__title}>{title}</h2>
				<button className={`btn-reset ${styles.InfoItem__btn}`}>
					Подробнее
				</button>
			</div>
		</div>
	)
}

export default InfoItem
