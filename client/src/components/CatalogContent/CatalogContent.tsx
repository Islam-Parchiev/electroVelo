import React from 'react'

import Filters from '@components/Filters/Filters'
import CatalogSort from '@components/CatalogSort/CatalogSort'

import styles from './CatalogContent.module.scss'

const CatalogContent:React.FC = () => {
	return (
		<section className={styles.CatalogContent}>
			<div className="container">
				<div className={styles.CatalogContent__wrapper}>
					<Filters/>
					<div className={styles.CatalogContent__right}>
            	<CatalogSort/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CatalogContent
