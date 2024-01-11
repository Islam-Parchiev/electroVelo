import React from 'react'

import AboutUsSubtitle from '@components/AboutUsSubtitle/AboutUsSubtitle';

import styles from './AboutUsContacts.module.scss'


const AboutUsContacts:React.FC = () => {
	return (
		<section className={styles.AboutUsContacts}>
			<div className="container">
				<AboutUsSubtitle variant="black">Контакты</AboutUsSubtitle>
			</div>
			<div className={styles.AboutUsContacts__map}>
				<img src="/images/Contacts/map.jpg" alt="" />
			</div>
		</section>
	)
}

export default AboutUsContacts
