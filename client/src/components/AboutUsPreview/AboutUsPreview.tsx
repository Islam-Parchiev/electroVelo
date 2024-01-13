import React from 'react'

import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs'
import Title from '@components/Title/Title'

import styles from './AboutUsPreview.module.scss'

const AboutUsPreview: React.FC= () => {

	return (
		<section className={styles.AboutUsPreview}>
			<div className="container">
				<div className={styles.AboutUsPreview__inner}>
					<Breadcrumbs paths={['Главная','О нас']} color="l"/>
					<Title type="light">О нас</Title>
				</div>
			</div>
		</section>
	)
}

export default AboutUsPreview
