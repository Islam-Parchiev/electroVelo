import React from 'react'

import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs'
import Title from '@components/Title/Title'

import styles from './CartTop.module.scss'

const CartTop: React.FC = () => {
	return (
		<section className={styles.CartTop}>
			<div className="container">
				<div className={styles.CartTop__wrapper}>
					<Breadcrumbs paths={['Главная','Корзина']} color="b"/>
					<Title type="black">Корзина</Title>
				</div>
			</div>
		</section>
	)
}

export default CartTop
