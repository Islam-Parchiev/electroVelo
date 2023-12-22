import React from 'react'

import styles from './OrdersHistory.module.scss'

interface OrdersHistoryProps {}

const OrdersHistory:React.FC<OrdersHistoryProps> = (props) => {
	const {} = props;
	return (
		<div className={styles.OrdersHistory}>
			OrdersHistory Component
		</div>
	)
}

export default OrdersHistory
