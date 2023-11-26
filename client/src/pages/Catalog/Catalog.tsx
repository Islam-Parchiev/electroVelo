import React from 'react'

import Header from '@components/Header/Header'
import CatalogMountain from '@components/CatalogMountain/CatalogMountain'
import Subscribe from '@components/Subscribe/Subscribe';
import CatalogContent from '@components/CatalogContent/CatalogContent';

import styles from './Catalog.module.scss';
const Catalog:React.FC = () => {
	return (
		<>
			<Header otherClass={styles.CatalogHeader}/>
			<main className="Catalog">
				<CatalogMountain/>
				<CatalogContent/>
				<Subscribe/>
			</main>
		</>
	)
}

export default Catalog
