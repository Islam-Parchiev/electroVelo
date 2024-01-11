import React from 'react'

import Header from '@components/Header/Header';

import Subscribe from '@components/Subscribe/Subscribe';
import Brands from '@components/Brands/Brands';
import WorkshopTop from '@components/WorkshopTop/WorkshopTop';
import BasicServices from '@components/BasicServices/BasicServices';
import AdditionalServices from '@components/AdditionalServices/AdditionalServices';

const Workshop:React.FC = () => {
	return (
		<>
		  <Header otherClass="FixedHeader"/>
			<main className="Workshop">
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
