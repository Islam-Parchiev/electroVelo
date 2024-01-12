import React from 'react'

import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs'

import styles from './DeliveryPreview.module.scss'

const DeliveryPreview: React.FC = () => {
	return (
		<section className={styles.DeliveryPreview}>
			<div className="container">
				<div className={styles.DeliveryPreview__inner}>
					<Breadcrumbs paths={['Главная','Доставка и оплата']} color="l"/>
					<h1 className={styles.DeliveryPreview__title}>
						Доставка и оплата
					</h1>
				</div>
			</div>
		</section>
	)
}

export default DeliveryPreview
