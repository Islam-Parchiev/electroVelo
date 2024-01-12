import React from 'react'

import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs'

import styles from './StoragePreview.module.scss'

const StoragePreview: React.FC = () => {
	return (
		<section className={styles.StoragePreview}>
			<div className="container">
				<div className={styles.StoragePreview__inner}>
					<Breadcrumbs paths={['Главная','Хранение велосипеда']} color="l"/>
					<h1 className={styles.StoragePreview__title}>
						Хранение велосипеда
					</h1>
				</div>
			</div>
		</section>
	)
}

export default StoragePreview
