import React from 'react'

import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs'

import Title from '@components/Title/Title'

import styles from './CatalogMountain.module.scss'

const CatalogMountain:React.FC = () => {
	return (
		<section className={styles.CatalogMountain}>
			<div className="container">
				<div className={styles.CatalogMountain__wrapper}>
					<Breadcrumbs color="l" paths={['Главная','Велосипеды','Горные велосипедыa']}/>
					<Title type="light">Горные велосипеды</Title>
				</div>
			</div>
		</section>
	)
}

export default CatalogMountain
