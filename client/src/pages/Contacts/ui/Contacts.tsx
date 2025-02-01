import React from 'react'

import ContactsMap from '@pages/Contacts/ui/ContactsMap/ContactsMap';
import ContactsInfo from '@pages/Contacts/ui/ContactsInfo/ContactsInfo';
import ContactsForm from '@pages/Contacts/ui/ContactsForm/ContactsForm';
import ContactsQuestions from '@pages/Contacts/ui/ContactsQuestions/ContactsQuestions';

import Brands from '../../../widgets/Brands/Brands';
import Subscribe from '../../../widgets/Subscribe/Subscribe';
import Header from '../../../widgets/Header/Header';

export const Contacts: React.FC = () => {
	return (
		<>
			<Header otherClass="FixedHeader" />
			<main className="Contacts">
				<ContactsMap />
				<ContactsInfo />
				<ContactsForm />
				<ContactsQuestions />
				<Brands />
				<Subscribe />
			</main>
		</>
	)
}
