import {FC} from 'react'

import Card from '@components/Card/Card'

import styles from './BestModels.module.scss'
const BestModels:FC = () => {
	return (
		<section className={styles.BestModels}>
			<div className={`container ${styles.BestModels__container}`}>
				<h2 className="title">
				Лучшие модели для зимней езды
				</h2>
             <ul className={styles.BestModels__items}>
               <Card/>
			 </ul>
			</div>
		</section>
	)
}

export default BestModels
