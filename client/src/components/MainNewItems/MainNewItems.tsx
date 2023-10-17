import { FC } from 'react'

import styles from './MainNewItems.module.scss'
const MainNewItems: FC = () => {
	return (
		<section className={styles.MainNewItems}>
			<div className={`container ${styles.MainNewItems__container}`}>
				<h2 className={styles.MainNewItems__title}>Новинки</h2>
				<ul className={`list-reset ${styles.MainNewItems__cards}`}>
					<li className={styles.Card}>
						<div className={styles.Card__header}>
							<div className={styles.Card__country}>
								<img src="/images/Card/country1.png" alt="" />
							</div>
							<div className={styles.Card__status}>
								<span>В наличии</span>
							</div>
						</div>
						<div className={styles.Card__body}></div>
						<div className={styles.Card__footer}></div>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default MainNewItems
