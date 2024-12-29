import React from 'react'

import CatalogMountain from '@pages/Catalog/ui/CatalogMountain/CatalogMountain'
import CatalogContent from '@pages/Catalog/ui/CatalogContent/CatalogContent';

import Header from '../../../widgets/Header/Header'
import Subscribe from '../../../widgets/Subscribe/Subscribe';
export const Catalog: React.FC = () => {
	return (
		<>
			<Header otherClass="FixedHeader" />
			<main className="Catalog">
				<CatalogMountain />
				<CatalogContent />
				<Subscribe />
			</main>
		</>
	)
}
