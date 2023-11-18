import React from 'react'

import Filters from '@components/Filters/Filters'
import CatalogSort from '@components/CatalogSort/CatalogSort'
import CatalogView from '@components/CatalogView/CatalogView'

import styles from './CatalogContent.module.scss'

const CatalogContent:React.FC = () => {
	return (
		<section className={styles.CatalogContent}>
			<div className="container">
				<div className={styles.CatalogContent__wrapper}>
					<Filters />
					<div className={styles.CatalogContent__right}>
						<CatalogSort />
						<CatalogView/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CatalogContent
