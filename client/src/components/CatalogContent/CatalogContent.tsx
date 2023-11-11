import React from 'react'

import styles from './CatalogContent.module.scss'

interface CatalogContentProps {}

const CatalogContent:React.FC<CatalogContentProps> = (props) => {
	const {} = props;
	return (
		<div className={styles.CatalogContent}>
			CatalogContent Component
		</div>
	)
}

export default CatalogContent
