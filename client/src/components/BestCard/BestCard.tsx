import React from 'react'

import styles from './BestCard.module.scss'

interface BestCardProps {}

const BestCard: React.FC<BestCardProps> = props => {
	const {} = props
	return (
		<li className={styles.BestCard}>
			<span className={styles.BestCard__title}>Велосипеды</span>
			<ul className="list-reset">
				<li>BMC</li>

				<li>BMC</li>
				<li>BMC</li>
				<li>BMC</li>
				<li>BMC</li>
				<li>BMC</li>
				<li>BMC</li>

				<li>BMC</li>
				<li>BMC</li>
				<li>BMC</li>
				<li>BMC</li>
				<li>BMC</li>
				<li>BMC</li>

				<li>BMC</li>
				<li>BMC</li>
				<li>BMC</li>
				<li>BMC</li>
				<li>BMC</li>
			</ul>
		</li>
	)
}

export default BestCard