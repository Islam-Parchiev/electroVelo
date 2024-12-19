import React from 'react'

import { Breadcrumbs,Title } from '../../shared/ui'

import styles from './CreateOrderTop.module.scss'

const CreateOrderTop: React.FC = () => {
	return (
		<section className={styles.CreateOrderTop}>
			<div className="container">
				<div className={styles.CreateOrderTop__wrapper}>
					<Breadcrumbs paths={['Главная', 'Оформление заказа']} color="l" />
					<Title type="black">Оформление заказа</Title>
				</div>
			</div>
		</section>
	)
}

export default CreateOrderTop
