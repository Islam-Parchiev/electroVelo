import React from 'react'

import Header from '@components/Header/Header';
import ContactsMap from '@components/ContactsMap/ContactsMap';
import ContactsInfo from '@components/ContactsInfo/ContactsInfo';

import styles from './Contacts.module.scss';

const Contacts:React.FC = () => {
	return (
		<>
		  <Header otherClass={styles.Contacts__header}/>
			<main className={styles.Contacts}>
				<ContactsMap/>
				<ContactsInfo/>
			</main>
		</>
	)
}

export default Contacts
