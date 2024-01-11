import React from 'react'

import styles from './StoragePreview.module.scss'

const StoragePreview: React.FC = () => {
	return (
		<section className={styles.StoragePreview}>
			<div className="container">
				<div className={styles.StoragePreview__inner}>
					<ul className={`list-reset ${styles.Breadcrumbs}`}>
						<li className={styles.Breadcrumbs__item}>
							<a href="/">Главная</a>
						</li>
						<li className={styles.Breadcrumbs__item}>
							<a href="/">Хранение велосипеда</a>
						</li>
					</ul>
					<h1 className={styles.StoragePreview__title}>
						Хранение велосипеда
					</h1>
				</div>
			</div>
		</section>
	)
}

export default StoragePreview
