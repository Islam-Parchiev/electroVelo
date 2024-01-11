import {FC} from 'react'

import Header from '@components/Header/Header'
import DeliveryPreview from '@components/DeliveryPreview/DeliveryPreview';
import DeliveryInfo from '@components/DeliveryInfo/DeliveryInfo';
import PaymentInfo from '@components/PaymentInfo/PaymentInfo';
import Brands from '@components/Brands/Brands'
import Subscribe from '@components/Subscribe/Subscribe'

const Delivery:FC = () => {
	return (
		<>
			<Header otherClass="FixedHeader"/>
			<main className="Delivery">
				<DeliveryPreview/>
				<DeliveryInfo/>
				<PaymentInfo/>
				<Brands/>
				<Subscribe/>
			</main>
		</>
	)
}

export default Delivery
