import React from 'react'

import { Link } from 'react-router-dom'

import { useMutation, useQueryClient } from '@tanstack/react-query';
import cartService from '@services/cart.service';

import CartItem from '@components/CartItem/CartItem'

import { ICartItem } from 'Cart';

import styles from './CartContent.module.scss'

interface CartContentProps {
	loading:boolean;
	success:boolean;
	cartDataItems:ICartItem[] | undefined;
}

const CartContent: React.FC<CartContentProps> = props => {
	const {
		loading,
		success,
		cartDataItems,
	} = props
	const queryClient = useQueryClient();

	// success&&console.log('tttooooooooo',cartDataItems[0].quantity);
	const {mutate} = useMutation({
		mutationFn: () => {
			return cartService.clearCart()
		},

		mutationKey:['clearCart'],
		onSuccess:()=>queryClient.invalidateQueries({queryKey:['cartItems']}),
	})
	return (
		<div className={styles.CartContent}>
			<div className={styles.CartContent__wrapper}>
				<div className={styles.CartContent__btns}>
					<Link to="/" className={styles.CartContent__back}>
						Вернуться к покупкам
					</Link>
					<button className={`btn-reset ${styles.CartContent__clear}`} onClick={()=> mutate()}>
						Очистить корзину
					</button>
				</div>
				<div className={styles.CartContent__goods}>
					<ul className={`list-reset ${styles.CartContent__list}`}>
						{
							loading?'Loadnig...':success ? cartDataItems?.map((cartItem:ICartItem)=> <CartItem 
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
