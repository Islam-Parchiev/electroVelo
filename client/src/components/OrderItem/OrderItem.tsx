import React from 'react'

import styles from './OrderItem.module.scss'

interface OrderItemProps {}

const OrderItem: React.FC<OrderItemProps> = props => {
	const {} = props
	return (
		<li className={styles.OrderItem}>
			<div className={styles.OrderItem__image}>
				<img src="/images/Product/pre1.1.png" alt="" />
			</div>
			<h3 className={styles.OrderItem__title}>
				Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018
			</h3>
			<div className={styles.OrderItem__price}>
				<span className={styles.OrderItem__price_current}>435 000 ₽</span>
				<span className={styles.OrderItem__price_prev}>522 000 ₽</span>
			</div>
		</li>
	)
}

export default OrderItem
