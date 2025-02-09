import React from 'react'

import AboutUsSubtitle from '@pages/AboutUs/ui/AboutUsSubtitle/AboutUsSubtitle';

import styles from './AboutUsContacts.module.scss'



const AboutUsContacts: React.FC = () => {
	return (
		<section className={styles.AboutUsContacts}>
			<div className="container">
				<AboutUsSubtitle variant="black">Контакты</AboutUsSubtitle>
			</div>
			<div className={styles.AboutUsContacts__map}>
				<picture>
					<source
						type="image/webp"
						srcSet="/images/Contacts/map.webp"
						media="(max-width:1920px)"
					/>
					<source
						type="image/jpeg"
						srcSet="/images/Contacts/mapMobile.jpg"
						media="(max-width:920px)"
					/>
					<img src="/images/Contacts/map.jpg" alt="" />

				</picture>
			</div>
		</section>
	)
}

export default AboutUsContacts
