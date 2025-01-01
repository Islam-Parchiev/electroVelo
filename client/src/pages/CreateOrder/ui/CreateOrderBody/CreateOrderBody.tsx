import React from 'react'

import CreateOrderForm from '@pages/CreateOrder/ui/CreateOrderForm/CreateOrderForm'
import OrderDelivery from '@pages/Profile/ui/OrdersHistory/Order/OrderDelivery/OrderDelivery'
import OrderFinish from '@pages/Profile/ui/OrdersHistory/Order/OrderFinish/OrderFinish'

import styles from './CreateOrderBody.module.scss'

const CreateOrderBody: React.FC = () => {
	return (
		<section className={styles.CreateOrderBody}>
			<div className="container">
				<div className={styles.CreateOrderBody__wrapper}>
					<div className={styles.CreateOrderBody__top}>
						<CreateOrderForm />
						<OrderDelivery />
					</div>
					<div className={styles.CreateOrderBody__bottom}>
						<OrderFinish />
					</div>
				</div>
			</div>
		</section>
	)
}

export default CreateOrderBody
