import React, { useEffect, useRef } from 'react'

import { useMutation, useQueryClient } from '@tanstack/react-query';

import cartService from '@services/cart.service';

import Counter from '@components/Counter/Counter'

import { useDebounce } from '../../hooks/useDebounce';

import styles from './CartItem.module.scss'

interface CartItemProps {
	id:number;
	imageUrl:string;
	title:string;
	price:number;
	count:number;
	prevPrice?:number;
}

const CartItem: React.FC<CartItemProps> = props => {
	const {
		id,
		imageUrl,
		title,
		price,
		prevPrice,
		count,
	} = props;
	console.log('testtt',count)
	const [countt, setCountt] = React.useState(count)
	const queryClient = useQueryClient();
	const debounced = useDebounce(countt,300)
	const {isSuccess,mutate} = useMutation({
   	 mutationFn: (id:number) => {
      	return cartService.deleteCartItem(id)
   	 },

		mutationKey:['cartItem delete'],
		onSuccess:()=>queryClient.invalidateQueries({queryKey:['cartItems']}),
  	})
	const changeQ = useMutation({
		mutationFn:()=> {
			return cartService.changeQuantity(id,countt)
		},
		onSuccess:()=>queryClient.invalidateQueries({queryKey:['cartItems']}),
		mutationKey:['cartItem update',countt],
	})

	const onClickMinus = () => {
		setCountt(prev => prev - 1)
		changeQ.mutate()
		console.log('-');
	}
	const onClickPlus = () => {
		setCountt(prev => prev + 1)
		changeQ.mutate()
		console.log('+');
	}
	return (
		<li className={styles.CartItem}>
			{debounced}
			<div className={styles.CartItem__image}>
				<img src={`/images/Product/${imageUrl}`} alt="" />
			</div>
			<h4 className={styles.CartItem__title}>
				{title}
			</h4>
			<Counter
				count={countt}
				onClickMinus={onClickMinus}
				onClickPlus={onClickPlus}
			/>
			<div className={styles.CartItem__price}>
				<span className={styles.CartItem__currentPrice}>{price} ₽</span>
				{prevPrice&&<span className={styles.CartItem__prevPrice}>{prevPrice} ₽</span>}
			</div>
			<button className={`btn-reset ${styles.CartItem__delete}`} onClick={()=> mutate(id)}>
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
			{isSuccess&&'deleted'}
		</li>
	)
}

export default CartItem
