import React from 'react'

import Header from '@components/Header/Header'
import CatalogMountain from '@components/CatalogMountain/CatalogMountain'
import CatalogContent from '@components/CatalogContent/CatalogContent';

import styles from './Catalog.module.scss';
const Catalog:React.FC = () => {
	return (
		<>
			<Header otherClass={styles.CatalogHeader}/>
			<main className="Catalog">
				<CatalogMountain/>
				<CatalogContent/>
			</main>
		</>
	)
}

export default Catalog
