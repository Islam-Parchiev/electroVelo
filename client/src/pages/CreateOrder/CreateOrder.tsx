import React from 'react'

import Header from '@components/Header/Header';
import CreateOrderTop from '@components/CreateOrderTop/CreateOrderTop';
import CreateOrderBody from '@components/CreateOrderBody/CreateOrderBody';
import Subscribe from '@components/Subscribe/Subscribe';

const CreateOrder:React.FC = () => {
	return (
		<>
		  <Header otherClass="FixedHeader"/>
			<main className="CreateOrder">
				<CreateOrderTop/>
				<CreateOrderBody/>
				<Subscribe/>
			</main>
		</>
	)
}

export default CreateOrder
