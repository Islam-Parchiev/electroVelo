import React from 'react'

import { Breadcrumbs } from '../../../../shared/ui'

import styles from './BlogPreview.module.scss'

const BlogPreview: React.FC = () => {
	return (
		<section className={styles.BlogPreview}>
			<div className="container">
				<div className={styles.BlogPreview__inner}>
					<Breadcrumbs paths={['Главная', 'Блог']} color="l" />
					<h1 className={styles.BlogPreview__title}>Блог</h1>
				</div>
			</div>
		</section>
	)
}

export default BlogPreview
