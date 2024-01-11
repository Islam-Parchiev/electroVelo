import React from 'react'

import Header from '@components/Header/Header'
import AboutUsPreview from '@components/AboutUsPreview/AboutUsPreview';
import AboutUsInfo from '@components/AboutUsInfo/AboutUsInfo';
import AboutUsBusiness from '@components/AboutUsBusiness/AboutUsBusiness';
import AboutUsBest from '@components/AboutUsBest/AboutUsBest';
import AboutUsQuestions from '@components/AboutUsQuestions/AboutUsQuestions';
import AboutUsTeam from '@components/AboutUsTeam/AboutUsTeam';
import AboutUsGallery from '@components/AboutUsGallery/AboutUsGallery';
import AboutUsContacts from '@components/AboutUsContacts/AboutUsContacts';
import ContactsInfo from '@components/ContactsInfo/ContactsInfo';
import Brands from '@components/Brands/Brands';
import Subscribe from '@components/Subscribe/Subscribe';

const AboutUs:React.FC = () => {
	return (
		<>
			<Header otherClass="FixedHeader"/>
			<main className="AboutUs">
				<AboutUsPreview/>
				<AboutUsInfo/>
				<AboutUsBusiness/>
				<AboutUsBest/>
				<AboutUsQuestions/>
				<AboutUsTeam/>
				<AboutUsGallery/>
				<AboutUsContacts/>
				<ContactsInfo/>
				<Brands/>
				<Subscribe/>
			</main>
		</>
	)
}

export default AboutUs
