import React from 'react'

import styles from './OrderItem.module.scss'

interface OrderItemProps {
	title:string;
	imageUrl:string;
	price:number;
	prevPrice:number;
}

const OrderItem: React.FC<OrderItemProps> = props => {
	const {
		title,
		imageUrl,
		price,
		prevPrice,
	} = props
	return (
		<li className={styles.OrderItem}>
			<div className={styles.OrderItem__image}>
			{/* pre1.1.png */}
				<img src={`/images/Product/${imageUrl}`} alt="" />
			</div>
			<h3 className={styles.OrderItem__title}>
				{/* Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018 */}
				{title}
			</h3>
			<div className={styles.OrderItem__price}>
				<span className={styles.OrderItem__price_current}>{/* 435 000 */}{price} ₽</span>

				<span className={styles.OrderItem__price_prev}>{/*522 000*/}{prevPrice} ₽</span>
			</div>
		</li>
	)
}

export default OrderItem
