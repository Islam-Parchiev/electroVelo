import React from 'react'

import styles from './ContactsMap.module.scss'

const ContactsMap: React.FC= () => {

	return (
		<section className={styles.ContactsMap}>
			<div className={styles.ContactsMap__top}>
				<div className="container">
					<div className={styles.ContactsMap__inner}>
						<ul className={`list-reset ${styles.Breadcrumbs}`}>
							<li className={styles.Breadcrumbs__item}>
								<a href="/">Главная</a>
							</li>
							<li className={styles.Breadcrumbs__item}>
								<a href="/">Контакты</a>
							</li>
						</ul>
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
