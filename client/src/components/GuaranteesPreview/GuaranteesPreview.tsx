import React from 'react'

import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs'
import Title from '@components/Title/Title'

import styles from './GuaranteesPreview.module.scss'

const GuaranteesPreview: React.FC = () => {
	return (
		<section className={styles.GuaranteesPreview}>
			<div className="container">
				<div className={styles.GuaranteesPreview__inner}>
					<Breadcrumbs paths={['Главная','Гарантии']} color="l"/>
					<Title type="light">Гарантии</Title>
				</div>
			</div>
		</section>
	)
}

export default GuaranteesPreview
