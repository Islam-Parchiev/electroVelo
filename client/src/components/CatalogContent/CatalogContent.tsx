import React from 'react'

import styles from './CatalogContent.module.scss'

const CatalogContent:React.FC = () => {
	return (
		<section className={styles.CatalogContent}>
			<div className="container">
				<div className={styles.CatalogContent__wrapper}>
					CatalogContent
				</div>
			</div>
		</section>
	)
}

export default CatalogContent
