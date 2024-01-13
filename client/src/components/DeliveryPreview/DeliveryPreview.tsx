import React from 'react'

import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs'
import Title from '@components/Title/Title'

import styles from './DeliveryPreview.module.scss'

const DeliveryPreview: React.FC = () => {
	return (
		<section className={styles.DeliveryPreview}>
			<div className="container">
				<div className={styles.DeliveryPreview__inner}>
					<Breadcrumbs paths={['Главная','Доставка и оплата']} color="l"/>
					<Title type="light">Доставка и оплата</Title>
				</div>
			</div>
		</section>
	)
}

export default DeliveryPreview
