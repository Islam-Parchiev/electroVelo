import React from 'react'

import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs'

import styles from './CartTop.module.scss'

const CartTop: React.FC = () => {
	return (
		<section className={styles.CartTop}>
			<div className="container">
				<div className={styles.CartTop__wrapper}>
					<Breadcrumbs paths={['Главная','Корзина']} color="b"/>
					<h1 className={styles.CartTop__title}>Корзина</h1>
				</div>
			</div>
		</section>
	)
}

export default CartTop
