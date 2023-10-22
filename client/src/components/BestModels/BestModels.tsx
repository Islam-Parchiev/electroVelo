import {FC} from 'react'

import styles from './BestModels.module.scss'
const BestModels:FC = () => {
	return (
		<section className={styles.BestModels}>
			<div className={`container ${styles.BestModels__container}`}>
				<h2 className={styles.BestModels__title}>
				Лучшие модели для зимней езды
				</h2>
				
			</div>
		</section>
	)
}

export default BestModels
