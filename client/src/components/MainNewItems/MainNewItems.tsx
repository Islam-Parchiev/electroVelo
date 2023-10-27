import { FC } from 'react'

import Card from '../../components/Card/Card'

import styles from './MainNewItems.module.scss'
const MainNewItems: FC = () => {
	return (
		<section className={styles.MainNewItems}>
			<div className={`container ${styles.MainNewItems__container}`}>
				<h2 className="title">Новинки</h2>
				<ul className={`list-reset ${styles.MainNewItems__cards}`}>
			
					<Card type="primary"/>
					<Card type="primary"/>
					<Card type="primary"/>
				</ul>
			</div>
		</section>
	)
}

export default MainNewItems
