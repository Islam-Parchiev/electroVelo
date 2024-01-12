import React from 'react'

import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs'

import styles from './CreateOrderTop.module.scss'

const CreateOrderTop: React.FC = () => {
	return (
		<section className={styles.CreateOrderTop}>
			<div className="container">
				<div className={styles.CreateOrderTop__wrapper}>
					<Breadcrumbs paths={['Главная','Оформление заказа']} color="l"/>
					<h1 className={styles.CreateOrderTop__title}>
						Оформление заказа
					</h1>
				</div>
			</div>
		</section>
	)
}

export default CreateOrderTop
