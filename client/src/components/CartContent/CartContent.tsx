import React from 'react'

import { Link } from 'react-router-dom'

import CartItem from '@components/CartItem/CartItem'

import styles from './CartContent.module.scss'

interface CartContentProps {}

const CartContent: React.FC<CartContentProps> = props => {
	const {} = props
	return (
		<div className={styles.CartContent}>
			
				<div className={styles.CartContent__wrapper}>
					<div className={styles.CartContent__btns}>
						<Link to="/" className={styles.CartContent__back}>
							Вернуться к покупкам
						</Link>
						<button
							className={`btn-reset ${styles.CartContent__clear}`}>
							Очистить корзину
						</button>
					</div>
					<div className={styles.CartContent__goods}>
						<ul className={`list-reset ${styles.CartContent__list}`}>
							<CartItem/>
							<CartItem/>
							<CartItem/>
							<CartItem/>

						</ul>
					</div>
				
			</div>
		</div>
	)
}

export default CartContent
