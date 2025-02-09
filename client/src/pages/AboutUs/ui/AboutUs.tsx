import React from 'react'

import AboutUsPreview from '@pages/AboutUs/ui/AboutUsPreview/AboutUsPreview';
import AboutUsInfo from '@pages/AboutUs/ui/AboutUsInfo/AboutUsInfo';
import AboutUsBusiness from '@pages/AboutUs/ui/AboutUsBusiness/AboutUsBusiness';
import AboutUsBest from '@pages/AboutUs/ui/AboutUsBest/AboutUsBest';
import AboutUsQuestions from '@pages/AboutUs/ui/AboutUsQuestions/AboutUsQuestions';
import AboutUsTeam from '@pages/AboutUs/ui/AboutUsTeam/AboutUsTeam';
import AboutUsGallery from '@pages/AboutUs/ui/AboutUsGallery/AboutUsGallery';
import AboutUsContacts from '@pages/AboutUs/ui/AboutUsContacts/AboutUsContacts';
import ContactsInfo from '@pages/Contacts/ui/ContactsInfo/ContactsInfo';

import Brands from '../../../widgets/Brands/Brands';
import Subscribe from '../../../widgets/Subscribe/Subscribe';
import Header from '../../../widgets/Header/Header'

export const AboutUs: React.FC = () => {
	return (
		<>
			<Header otherClass="FixedHeader" />
			<main className="AboutUs">
				<AboutUsPreview />
				<AboutUsInfo />
				<AboutUsBusiness />
				<AboutUsBest />
				<AboutUsQuestions />
				<AboutUsTeam />
				<AboutUsGallery />
				<AboutUsContacts />
				<ContactsInfo />
				<Brands />
				<Subscribe />
			</main>
		</>
	)
}

