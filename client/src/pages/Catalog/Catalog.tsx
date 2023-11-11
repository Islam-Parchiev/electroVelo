import React from 'react'

import CatalogMountain from '@components/CatalogMountain/CatalogMountain'
import Header from '@components/Header/Header'

import styles from './Catalog.module.scss';
const Catalog:React.FC = () => {
	return (
		<>
			<Header otherClass={styles.CatalogHeader}/>
			<main className="Catalog">
				<CatalogMountain/>
			</main>
		</>
	)
}

export default Catalog