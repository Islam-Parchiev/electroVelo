import { FC } from 'react'

import Header from '@components/Header/Header'
import CartTop from '@components/CartTop/CartTop';
import CartContent from '@components/CartContent/CartContent';

import styles from './Cart.module.scss';
const Cart:FC = () => {
	return (
		<>
			<Header otherClass={styles.Cart__header}/>
			<main className={styles.Cart}>
				<CartTop/>
				<section className={styles.Cart__body}>
					<CartContent/>
				</section>
				
			</main>
		</>
	)
}

export default Cart
