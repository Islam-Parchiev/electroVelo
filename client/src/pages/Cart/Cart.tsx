import { FC } from 'react'

import Header from '@components/Header/Header'
import CartTop from '@components/CartTop/CartTop';
import CartContent from '@components/CartContent/CartContent';
import SimilarGoods from '@components/SimilarGoods/SimilarGoods';
import Subscribe from '@components/Subscribe/Subscribe';
import CartInfo from '@components/CartInfo/CartInfo';

import styles from './Cart.module.scss';
const Cart:FC = () => {
	return (
		<>
			<Header otherClass={styles.Cart__header}/>
			<main className={styles.Cart}>
				<CartTop/>
				<section className={styles.Cart__body}>
					<div className={`container ${styles.Cart__body_container}`}>

						<CartContent/>
						<CartInfo/>
					</div>
				</section>
				<SimilarGoods loading={false} success={true} category={'City'}/>
				<Subscribe/>
			</main>
		</>
	)
}

export default Cart
