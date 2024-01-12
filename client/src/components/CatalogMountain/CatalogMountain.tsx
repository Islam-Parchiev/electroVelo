import React from 'react'

import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs'

import styles from './CatalogMountain.module.scss'

const CatalogMountain:React.FC = () => {
	return (
		<section className={styles.CatalogMountain}>
			<div className="container">
				<div className={styles.CatalogMountain__wrapper}>
					<Breadcrumbs color="l" paths={['Главная','Велосипеды','Горные велосипедыa']}/>
					<h1 className="title">Горные велосипеды</h1>
				</div>
			</div>
		</section>
	)
}

export default CatalogMountain
