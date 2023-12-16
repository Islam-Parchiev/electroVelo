import React from 'react'

import Counter from '@components/Counter/Counter'

import styles from './CartItem.module.scss'

interface CartItemProps {}

const CartItem: React.FC<CartItemProps> = props => {
	const {} = props
	const [count, setCount] = React.useState(1)
	const onClickMinus = () => {
		setCount(prev => prev - 1)
	}
	const onClickPlus = () => {
		setCount(prev => prev + 1)
	}
	return (
		<li className={styles.CartItem}>
			<div className={styles.CartItem__image}>
				<img src="/images/Product/pre1.1.png" alt="" />
			</div>
			<h4 className={styles.CartItem__title}>
				Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018
			</h4>
			<Counter
				count={count}
				onClickMinus={onClickMinus}
				onClickPlus={onClickPlus}
			/>
			<div className={styles.CartItem__price}>
				<span className={styles.CartItem__currentPrice}>11 ₽</span>
				<span className={styles.CartItem__prevPrice}>11 ₽</span>
			</div>
			<button className={`btn-reset ${styles.CartItem__delete}`}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="17"
					height="20"
					viewBox="0 0 17 20"
					fill="none">
					<line
						x1="0.571014"
						y1="0.738556"
						x2="15.656"
						y2="15.8235"
						stroke="#B3B3B3"
						stroke-width="1.33333"
					/>
					<line
						x1="15.5554"
						y1="0.638031"
						x2="0.470443"
						y2="15.723"
						stroke="#B3B3B3"
						stroke-width="1.33333"
					/>
				</svg>
			</button>
		</li>
	)
}

export default CartItem
