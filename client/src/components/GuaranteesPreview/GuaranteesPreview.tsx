import React from 'react'

import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs'

import styles from './GuaranteesPreview.module.scss'

const GuaranteesPreview: React.FC = () => {
	return (
		<section className={styles.GuaranteesPreview}>
			<div className="container">
				<div className={styles.GuaranteesPreview__inner}>
					<Breadcrumbs paths={['Главная','Гарантии']} color="l"/>
					<h1 className={styles.GuaranteesPreview__title}>Гарантии</h1>
				</div>
			</div>
		</section>
	)
}

export default GuaranteesPreview
