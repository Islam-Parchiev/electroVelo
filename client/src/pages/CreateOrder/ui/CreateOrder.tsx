import React from 'react'

import CreateOrderTop from '@pages/CreateOrder/ui/CreateOrderTop/CreateOrderTop';
import CreateOrderBody from '@pages/CreateOrder/ui/CreateOrderBody/CreateOrderBody';

import Subscribe from '../../../widgets/Subscribe/Subscribe';
import Header from '../../../widgets/Header/Header';
export const CreateOrder: React.FC = () => {
	return (
		<>
			<Header otherClass="FixedHeader" />
			<main className="CreateOrder">
				<CreateOrderTop />
				<CreateOrderBody />
				<Subscribe />
			</main>
		</>
	)
}
