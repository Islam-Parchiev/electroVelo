import React from 'react'

import styles from './FooterCatalog.module.scss'


const FooterCatalog: React.FC = () => {
	return (
		<div className={styles.FooterCatalog}>
			<h4 className={styles.FooterCatalog__title}>Каталог</h4>
			<ul className={`list-reset ${styles.FooterCatalog__list}`}>
				<li className={styles.FooterCatalog__list_item}>
					<a href="/">Trade-in</a>
				</li>
				<li className={styles.FooterCatalog__list_item}>
					<a href="/">Велосипеды</a>
				</li>
				<li className={styles.FooterCatalog__list_item}>
					<a href="/">Экипировка</a>
				</li>
				<li className={styles.FooterCatalog__list_item}>
					<a href="/">Запчасти</a>
				</li>
				<li className={styles.FooterCatalog__list_item}>
					<a href="/">Велостанки</a>
				</li>
				<li className={styles.FooterCatalog__list_item}>
					<a href="/">Аксессуары</a>
				</li>
			</ul>
		</div>
	)
}

export default FooterCatalog
