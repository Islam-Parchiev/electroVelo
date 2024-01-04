import React from 'react'

import Header from '@components/Header/Header';

import Subscribe from '@components/Subscribe/Subscribe';
import Brands from '@components/Brands/Brands';
import WorkshopTop from '@components/WorkshopTop/WorkshopTop';
import BasicServices from '@components/BasicServices/BasicServices';
import AdditionalServices from '@components/AdditionalServices/AdditionalServices';

import styles from './Workshop.module.scss';

const Workshop:React.FC = () => {
	return (
		<>
		  <Header otherClass={styles.Workshop__header}/>
			<main className={styles.Workshop}>
				<WorkshopTop/>
				<BasicServices/>
				<AdditionalServices/>
				<Brands/>
				<Subscribe/>
			</main>
		</>
	)
}

export default Workshop
