import React from 'react'

import CreateOrderForm from '@components/CreateOrderForm/CreateOrderForm'
import OrderDelivery from '@components/OrderDelivery/OrderDelivery'
import OrderFinish from '@components/OrderFinish/OrderFinish'

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
