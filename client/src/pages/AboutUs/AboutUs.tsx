import React from 'react'

import Header from '@components/Header/Header'
import AboutUsPreview from '@components/AboutUsPreview/AboutUsPreview';
import AboutUsInfo from '@components/AboutUsInfo/AboutUsInfo';
import AboutUsBusiness from '@components/AboutUsBusiness/AboutUsBusiness';

import styles from './AboutUs.module.scss';
const AboutUs:React.FC = () => {
	return (
		<>
			<Header otherClass={styles.AboutUsHeader}/>
			<main className="AboutUs">
				<AboutUsPreview/>
				<AboutUsInfo/>
				<AboutUsBusiness/>
			</main>
		</>
	)
}

export default AboutUs
