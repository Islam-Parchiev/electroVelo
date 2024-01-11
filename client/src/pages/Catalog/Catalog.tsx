import React from 'react'

import Header from '@components/Header/Header'
import CatalogMountain from '@components/CatalogMountain/CatalogMountain'
import Subscribe from '@components/Subscribe/Subscribe';
import CatalogContent from '@components/CatalogContent/CatalogContent';

const Catalog:React.FC = () => {
	return (
		<>
			<Header otherClass="FixedHeader"/>
			<main className="Catalog">
				<CatalogMountain/>
				<CatalogContent/>
				<Subscribe/>
			</main>
		</>
	)
}

export default Catalog
