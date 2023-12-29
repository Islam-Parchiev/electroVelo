import React from 'react'

import Order from '@components/Order/Order';
import ProfileTitle from '@components/ProfileTitle/ProfileTitle';

import styles from './OrdersHistory.module.scss'



const OrdersHistory: React.FC= () => {

	return (
		<div className={styles.OrdersHistory}>
			<div className={styles.OrdersHistory__wrapper}>

				<ProfileTitle>История заказов</ProfileTitle>
				<div className={styles.OrdersHistory__header}>
					<span className={styles.OrdersHistory__subtitle}>Дата</span>
					<span className={styles.OrdersHistory__subtitle}>
						Номер заказа
					</span>

					<span className={styles.OrdersHistory__subtitle}>
						Сумма заказа
					</span>
					<span className={styles.OrdersHistory__subtitle}>Статус</span>
				</div>
				<div className={styles.OrdersHistory__content}>
					<Order 
						date="22.01.2023" 
						orderNumber={789563678} 
						orderPrice={605370} 
						orderStatus="Новый заказ"
					/>
				</div>
			</div>
		</div>
	)
}

export default OrdersHistory
// 22.01.2023
// 789563678
// 605 370
// Новый заказ
