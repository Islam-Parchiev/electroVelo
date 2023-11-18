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
						<div className={styles.CatalogContent__top}>
							<CatalogSort />
							<CatalogView/>
						</div>
					  <div className={styles.CatalogGoods}>
							dasdsadsa
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CatalogContent
