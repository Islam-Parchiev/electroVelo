import { FC } from 'react'

import DeliveryPreview from '@pages/Delivery/ui/DeliveryPreview/DeliveryPreview';
import DeliveryInfo from '@pages/Delivery/ui/DeliveryInfo/DeliveryInfo';
import PaymentInfo from '@pages/Delivery/ui/PaymentInfo/PaymentInfo';

import Brands from '../../../widgets/Brands/Brands'
import Header from '../../../widgets/Header/Header'
import Subscribe from '../../../widgets/Subscribe/Subscribe'

export const Delivery: FC = () => {
	return (
		<>
			<Header otherClass="FixedHeader" />
			<main className="Delivery">
				<DeliveryPreview />
				<DeliveryInfo />
				<PaymentInfo />
				<Brands />
				<Subscribe />
			</main>
		</>
	)
}
