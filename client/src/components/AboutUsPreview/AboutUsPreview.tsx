import React from 'react'

import styles from './AboutUsPreview.module.scss'

const AboutUsPreview: React.FC= () => {

	return (
		<section className={styles.AboutUsPreview}>
			<div className="container">
				<div className={styles.AboutUsPreview__inner}>
					<ul className={`list-reset ${styles.Breadcrumbs}`}>
						<li className={styles.Breadcrumbs__item}>
							<a href="/">Главная</a>
						</li>
						<li className={styles.Breadcrumbs__item}>
							<a href="/">О нас</a>
						</li>
					</ul>
					<h1 className={styles.AboutUsPreview__title}>О нас</h1>
				</div>
			</div>
		</section>
	)
}

export default AboutUsPreview
