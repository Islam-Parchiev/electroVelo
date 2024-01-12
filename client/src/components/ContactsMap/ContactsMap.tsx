import React from 'react'

import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs'

import styles from './ContactsMap.module.scss'

const ContactsMap: React.FC= () => {

	return (
		<section className={styles.ContactsMap}>
			<div className={styles.ContactsMap__top}>
				<div className="container">
					<div className={styles.ContactsMap__inner}>
						<Breadcrumbs paths={['Главная','Контакты']} color="l"/>
						<h1 className={styles.ContactsMap__title}>
							Контакты
						</h1>
					</div>
				</div>
			</div>
			<div className={styles.ContactsMap__bottom}>
				<img src="/images/Contacts/map.jpg" alt="" />
			</div>
		</section>
	)
}

export default ContactsMap
