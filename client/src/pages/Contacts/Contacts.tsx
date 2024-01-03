import React from 'react'

import Header from '@components/Header/Header';
import ContactsMap from '@components/ContactsMap/ContactsMap';
import ContactsInfo from '@components/ContactsInfo/ContactsInfo';
import ContactsForm from '@components/ContactsForm/ContactsForm';
import ContactsQuestions from '@components/ContactsQuestions/ContactsQuestions';
import Subscribe from '@components/Subscribe/Subscribe';
import Brands from '@components/Brands/Brands';

import styles from './Contacts.module.scss';

const Contacts:React.FC = () => {
	return (
		<>
		  <Header otherClass={styles.Contacts__header}/>
			<main className={styles.Contacts}>
				<ContactsMap/>
				<ContactsInfo/>
				<ContactsForm/>
				<ContactsQuestions/>
				<Brands/>
				<Subscribe/>
			</main>
		</>
	)
}

export default Contacts
