import React from 'react'

import { Link } from 'react-router-dom'

import CartItem from '@components/CartItem/CartItem'

import { ICartItem } from 'Cart';

import styles from './CartContent.module.scss'

interface CartContentProps {
	loading:any;
	success:any;
	cartDataItems:any;
}

const CartContent: React.FC<CartContentProps> = props => {
	const {
		loading,
		success,
		cartDataItems,
	} = props

	success&&console.log('tttooooooooo',cartDataItems[0].quantity);
	return (
		<div className={styles.CartContent}>
			<div className={styles.CartContent__wrapper}>
				<div className={styles.CartContent__btns}>
					<Link to="/" className={styles.CartContent__back}>
						Вернуться к покупкам
					</Link>
					<button className={`btn-reset ${styles.CartContent__clear}`}>
						Очистить корзину
					</button>
				</div>
				<div className={styles.CartContent__goods}>
					<ul className={`list-reset ${styles.CartContent__list}`}>
						{
							loading?'Loadnig...':success ? cartDataItems.map((cartItem:ICartItem)=> <CartItem 
								id={cartItem.id}
								key={cartItem.id} 
								count={cartItem.quantity} 
								imageUrl={cartItem.product.previewImage}
								price={cartItem.product.price}
								prevPrice={cartItem.product.prevPrice}
								title={cartItem.product.title}/>):'Error'
						}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default CartContent
