import React from 'react'

import { Breadcrumbs, Title } from '../../shared/ui'

import styles from './ContactsMap.module.scss'

const ContactsMap: React.FC = () => {

	return (
		<section className={styles.ContactsMap}>
			<div className={styles.ContactsMap__top}>
				<div className="container">
					<div className={styles.ContactsMap__inner}>
						<Breadcrumbs paths={['Главная', 'Контакты']} color="l" />
						<Title type="light">Контакты</Title>
					</div>
				</div>
			</div>
			<div className={styles.ContactsMap__bottom}>
				<picture>
					<source
						type="image/webp"
						srcSet="/images/Contacts/map.webp"
						media="(max-width:1920px)"
					/>
					<img src="/images/Contacts/map.jpg" alt="map" />

				</picture>
			</div>
		</section>
	)
}

export default ContactsMap
