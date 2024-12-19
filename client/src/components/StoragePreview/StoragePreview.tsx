import React from 'react'

import { Breadcrumbs, Title } from '../../shared/ui'

import styles from './StoragePreview.module.scss'

const StoragePreview: React.FC = () => {
	return (
		<section className={styles.StoragePreview}>
			<div className="container">
				<div className={styles.StoragePreview__inner}>
					<Breadcrumbs paths={['Главная', 'Хранение велосипеда']} color="l" />
					<Title type="light">Хранение велосипеда</Title>
				</div>
			</div>
		</section>
	)
}

export default StoragePreview
