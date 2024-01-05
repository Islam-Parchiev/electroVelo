import React from 'react'

import styles from './AboutUsCard.module.scss'

interface AboutUsCardProps {
	title: string
	description: string
}

const AboutUsCard: React.FC<AboutUsCardProps> = props => {
	const { title, description } = props
	return (
		<li className={styles.AboutUsCard}>
			<h4 className={styles.AboutUsCard__title}>{title}</h4>
			<p>
				{description}
			</p>
			<button className={`btn-reset ${styles.AboutUsCard__btn}`}>
				Подробнее
			</button>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="391"
				height="139"
				viewBox="0 0 391 139"
				fill="none">
				<path
					d="M416 93C416 138.84 378.84 176 333 176C287.16 176 0.5 186.84 0.5 141C181.5 126.5 354.5 54 397.5 0.5C443.34 0.5 416 47.1604 416 93Z"
					fill="#101010"
				/>
			</svg>
		</li>
	)
}

export default AboutUsCard
