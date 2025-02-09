import React from 'react'

import styles from './Ticker.module.scss'

interface TickerProps {
	children: React.ReactNode
}

const Ticker: React.FC<TickerProps> = props => {
	const { children } = props
	return (
		<div className={styles.Ticker}>
			<div className={styles.Ticker__wrapper}>{children}</div>
		</div>
	)
}

export default Ticker
