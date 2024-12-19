import React from 'react'

import { Breadcrumbs, Title } from '../../shared/ui'

import styles from './CatalogMountain.module.scss'

const CatalogMountain: React.FC = () => {
	return (
		<section className={styles.CatalogMountain}>
			<div className="container">
				<div className={styles.CatalogMountain__wrapper}>
					<Breadcrumbs color="l" paths={['Главная', 'Велосипеды', 'Горные велосипедыa']} />
					<Title type="light">Горные велосипеды</Title>
				</div>
			</div>
		</section>
	)
}

export default CatalogMountain
