import React from 'react'

import Header from '@components/Header/Header'
import AboutUsPreview from '@components/AboutUsPreview/AboutUsPreview';
import AboutUsInfo from '@components/AboutUsInfo/AboutUsInfo';
import AboutUsBusiness from '@components/AboutUsBusiness/AboutUsBusiness';
import AboutUsBest from '@components/AboutUsBest/AboutUsBest';
import AboutUsQuestions from '@components/AboutUsQuestions/AboutUsQuestions';
import AboutUsTeam from '@components/AboutUsTeam/AboutUsTeam';
import Brands from '@components/Brands/Brands';
import Subscribe from '@components/Subscribe/Subscribe';
import ContactsInfo from '@components/ContactsInfo/ContactsInfo';

import styles from './AboutUs.module.scss';
const AboutUs:React.FC = () => {
	return (
		<>
			<Header otherClass={styles.AboutUsHeader}/>
			<main className="AboutUs">
				<AboutUsPreview/>
				<AboutUsInfo/>
				<AboutUsBusiness/>
				<AboutUsBest/>
				<AboutUsQuestions/>
				<AboutUsTeam/>
				<ContactsInfo/>
				<Brands/>
				<Subscribe/>
			</main>
		</>
	)
}

export default AboutUs
