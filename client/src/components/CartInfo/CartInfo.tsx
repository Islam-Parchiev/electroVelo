import React from 'react'

import Button from '@components/Button/Button'

import styles from './CartInfo.module.scss'

interface CartInfoProps {
	totalPrice: number | undefined
	discount: number | undefined
}

const CartInfo: React.FC<CartInfoProps> = props => {
	const { totalPrice, discount } = props
	return (
		<div className={styles.CartInfo}>
			<div className={styles.CartInfo__wrapper}>
				<ul className={`list-reset ${styles.CartInfo__list}`}>
					<li className={styles.CartInfo__item}>
						<h4>Номер заказа</h4>
						<span>789563678</span>
					</li>
					<li className={styles.CartInfo__item}>
						<h4>Сумма заказа (без скидки)</h4>
						<span>
							{totalPrice && discount ? totalPrice + discount : 0} ₽
						</span>
					</li>
					<li className={styles.CartInfo__item}>
						<h4>Скидка</h4>
						<span>{discount} ₽</span>
					</li>
				</ul>
				<div className={styles.CartInfo__total}>
					<h3 className={styles.CartInfo__total_title}>Итого</h3>
					<span>{totalPrice} ₽</span>
				</div>
				<Button
					handleClick={() => console.log('cartClic')}
					otherClass={styles.CartInfo__btn}>
					Оформить заказ
				</Button>
			</div>
		</div>
	)
}

export default CartInfo
