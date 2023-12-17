import React from 'react'

import Button from '@components/Button/Button';

import styles from './CartInfo.module.scss'

interface CartInfoProps {}

const CartInfo:React.FC<CartInfoProps> = (props) => {
	const {} = props;
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
						<span>692 370 ₽</span>
					</li>
					<li className={styles.CartInfo__item}>
						<h4>Скидка</h4>
						<span>87 000 ₽</span>
					</li>
				</ul>
				<div className={styles.CartInfo__total}>
					<h3 className={styles.CartInfo__total_title}>Итого</h3>
					<span>605 370 ₽</span>
				</div>
				<Button handleClick={()=>console.log('cartClic')} otherClass={styles.CartInfo__btn}>Оформить заказ</Button>
			</div>
		</div>
	)
}

export default CartInfo
