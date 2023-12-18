import React from 'react'

import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import cartService from '@services/cart.service'

import CartItem from '@components/CartItem/CartItem'

import styles from './CartContent.module.scss'

interface CartContentProps {}
interface ICartProduct {
	articul:string;
available: boolean;
brand:string; 
category:string;
country:string;
description:string;
id:number;
material:string;
prevPrice:number;
previewImage:string;
price:number;
title:string;
}
interface ICartItem {
id:number;
product: ICartProduct
quantity:number;
}
interface ICartData {
	id:number;
items:ICartItem[];

}
const CartContent: React.FC<CartContentProps> = props => {
	const {} = props
	const {data,isLoading,isSuccess} = useQuery<ICartData>({
		queryKey: ['cartItems'],
		queryFn: () =>cartService.getCart(),
	})
	console.log(isSuccess&&data);

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
							isLoading?'Loadnig...':isSuccess ? data.items.map((cartItem)=> <CartItem 
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
