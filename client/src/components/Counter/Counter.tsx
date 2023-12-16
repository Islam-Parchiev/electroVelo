import React from 'react'


import styles from './Counter.module.scss'

interface ICounter {
	handleChange:(value:number)=>void;
	count:number;
}

const Counter: React.FC<ICounter> = (props) => {
	const {
		count,
		handleChange,
	}=props;
	return (
		<div className={styles.Counter}>
			<button
				className={`btn-reset ${styles.Counter__btn}`}
				onClick={() => handleChange(-1)}>
				-
			</button>
			<span>{count}</span>
			<button
				className={`btn-reset ${styles.Counter__btn}`}
				onClick={() => handleChange(1)}>
				+
			</button>
		</div>
	)
}

export default Counter
