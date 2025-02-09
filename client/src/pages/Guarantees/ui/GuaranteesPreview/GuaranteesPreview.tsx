import React from 'react'

import { Breadcrumbs, Title } from '../../../../shared/ui'

import styles from './GuaranteesPreview.module.scss'

const GuaranteesPreview: React.FC = () => {
	return (
		<section className={styles.GuaranteesPreview}>
			<div className="container">
				<div className={styles.GuaranteesPreview__inner}>
					<Breadcrumbs paths={['Главная', 'Гарантии']} color="l" />
					<Title type="light">Гарантии</Title>
				</div>
			</div>
		</section>
	)
}

export default GuaranteesPreview
