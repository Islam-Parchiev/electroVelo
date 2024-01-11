import React from 'react'

import Header from '@components/Header/Header';
import ContactsMap from '@components/ContactsMap/ContactsMap';
import ContactsInfo from '@components/ContactsInfo/ContactsInfo';
import ContactsForm from '@components/ContactsForm/ContactsForm';
import ContactsQuestions from '@components/ContactsQuestions/ContactsQuestions';
import Subscribe from '@components/Subscribe/Subscribe';
import Brands from '@components/Brands/Brands';


const Contacts:React.FC = () => {
	return (
		<>
		  <Header otherClass="FixedHeader"/>
			<main className="Contacts">
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
