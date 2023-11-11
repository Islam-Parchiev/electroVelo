import React from 'react'

import Filters from '@components/Filters/Filters'

import styles from './CatalogContent.module.scss'

const CatalogContent:React.FC = () => {
	return (
		<section className={styles.CatalogContent}>
			<div className="container">
				<div className={styles.CatalogContent__wrapper}>
					<Filters/>
					<div>Goods</div>
				</div>
			</div>
		</section>
	)
}

export default CatalogContent
