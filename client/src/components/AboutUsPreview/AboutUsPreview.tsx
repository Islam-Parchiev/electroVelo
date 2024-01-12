import React from 'react'

import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs'

import styles from './AboutUsPreview.module.scss'

const AboutUsPreview: React.FC= () => {

	return (
		<section className={styles.AboutUsPreview}>
			<div className="container">
				<div className={styles.AboutUsPreview__inner}>
					<Breadcrumbs paths={['Главная','О нас']} color="l"/>
					<h1 className={styles.AboutUsPreview__title}>О нас</h1>
				</div>
			</div>
		</section>
	)
}

export default AboutUsPreview
