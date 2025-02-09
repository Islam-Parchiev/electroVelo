import React from 'react'


import WorkshopTop from '@pages/Workshop/ui/WorkshopTop/WorkshopTop';
import BasicServices from '@pages/Workshop/ui/BasicServices/BasicServices';

import Header from '../../../widgets/Header/Header';
import Brands from '../../../widgets/Brands/Brands';
import Subscribe from '../../../widgets/Subscribe/Subscribe';

import AdditionalServices from './AdditionalServices/AdditionalServices';

export const Workshop: React.FC = () => {
	return (
		<>
			<Header otherClass="FixedHeader" />
			<main className="Workshop">
				<WorkshopTop />
				<BasicServices />
				<AdditionalServices />
				<Brands />
				<Subscribe />
			</main>
		</>
	)
}

