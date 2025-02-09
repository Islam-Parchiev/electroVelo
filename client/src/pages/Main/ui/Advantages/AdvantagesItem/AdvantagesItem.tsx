import React from 'react'

import styles from './AdvantagesItem.module.scss'

interface AdvantagesItemProps {
	title: string
	description: string
	url: string
}

const AdvantagesItem: React.FC<AdvantagesItemProps> = props => {
	const { title, description, url } = props
	return (
		<li className={styles.AdvantagesItem}>
			<h4 className={styles.AdvantagesItem__title}>{title}</h4>
			<p>{description}</p>
			<button className={`btn-reset ${styles.AdvantagesItem__btn}`}>
				<a href={url} target="_blank" rel="noreferrer">
					Подробнее
				</a>
			</button>
		</li>
	)
}

export default AdvantagesItem
