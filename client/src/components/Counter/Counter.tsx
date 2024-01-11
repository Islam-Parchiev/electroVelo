import React from 'react'

import styles from './Counter.module.scss'

interface ICounter {
	onClickMinus: () => void
	onClickPlus: () => void
	count: number
}

const Counter: React.FC<ICounter> = props => {
	const { count, onClickPlus, onClickMinus } = props
	// TODO:Fix Counter
	return (
		<div className={styles.Counter}>
			<button
				className={`btn-reset ${styles.Counter__btn}`}
				onClick={onClickMinus}>
				-
			</button>
			<span>{count}</span>
			<button
				className={`btn-reset ${styles.Counter__btn}`}
				onClick={onClickPlus}>
				+
			</button>
		</div>
	)
}

export default Counter
