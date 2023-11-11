import React from 'react'

import styles from './CatalogMountain.module.scss'

const CatalogMountain:React.FC = () => {
	return (
		<section className={styles.CatalogMountain}>
			<div className="container">
				<div className={styles.CatalogMountain__wrapper}>
					<ul className={`list-reset ${styles.Breadcrumbs}`}>
						<li className={styles.Breadcrumbs__item}>
							<a href="/">
								Главная
							</a>
						</li>
						<li className={styles.Breadcrumbs__item}>
							<a href="/">
							Велосипеды 
							</a>
						</li>
						<li className={styles.Breadcrumbs__item}>
							<a href="/">
							Горные велосипеды 
							</a>
						</li>
					</ul>
					<h1 className="title">Горные велосипеды</h1>
				</div>
			</div>
		</section>
	)
}

export default CatalogMountain
