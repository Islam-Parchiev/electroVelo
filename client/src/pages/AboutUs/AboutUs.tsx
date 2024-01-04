import React from 'react'

import Header from '@components/Header/Header'
import AboutUsPreview from '@components/AboutUsPreview/AboutUsPreview';
import AboutUsInfo from '@components/AboutUsInfo/AboutUsInfo';

import styles from './AboutUs.module.scss';
const AboutUs:React.FC = () => {
	return (
		<>
			<Header otherClass={styles.AboutUsHeader}/>
			<main className="AboutUs">
				<AboutUsPreview/>
				<AboutUsInfo/>
			</main>
		</>
	)
}

export default AboutUs
