import React from 'react'

import styles from './GuaranteesPreview.module.scss'

interface GuaranteesPreviewProps {}

const GuaranteesPreview: React.FC<GuaranteesPreviewProps> = props => {
	const {} = props
	return (
		<section className={styles.GuaranteesPreview}>
			<div className="container">
				<div className={styles.GuaranteesPreview__inner}>
					<ul className={`list-reset ${styles.Breadcrumbs}`}>
						<li className={styles.Breadcrumbs__item}>
							<a href="/">Главная</a>
						</li>
						<li className={styles.Breadcrumbs__item}>
							<a href="/">Гарантии</a>
						</li>
					</ul>
					<h1 className={styles.GuaranteesPreview__title}>Гарантии</h1>
				</div>
			</div>
		</section>
	)
}

export default GuaranteesPreview
