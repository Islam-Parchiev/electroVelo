import React from 'react'

import styles from './BlogPreview.module.scss'

const BlogPreview:React.FC = () => {
	return (
		<section className={styles.BlogPreview}>
			<div className="container">
				<div className={styles.BlogPreview__inner}>
					<ul className={`list-reset ${styles.Breadcrumbs}`}>
						<li className={styles.Breadcrumbs__item}>
							<a href="/">Главная</a>
						</li>
						<li className={styles.Breadcrumbs__item}>
							<a href="/">Блог</a>
						</li>
					</ul>
					<h1 className={styles.BlogPreview__title}>Блог</h1>
				</div>
			</div>
		</section>
	)
}

export default BlogPreview
