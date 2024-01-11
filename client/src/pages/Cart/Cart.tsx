import { FC } from 'react'

import { useQuery } from '@tanstack/react-query'

import cartService from '@services/cart.service'

import Header from '@components/Header/Header'
import CartTop from '@components/CartTop/CartTop';
import CartContent from '@components/CartContent/CartContent';
import SimilarGoods from '@components/SimilarGoods/SimilarGoods';
import Subscribe from '@components/Subscribe/Subscribe';
import CartInfo from '@components/CartInfo/CartInfo';

import { ICartData } from 'Cart';

import styles from './Cart.module.scss';

const Cart:FC = () => {
	const {data,isLoading,isSuccess} = useQuery<ICartData>({
		queryKey: ['cartItems'],
		queryFn: () =>cartService.getCart(),
	})
	
	
	return (
		<>
			<Header otherClass={styles.Cart__header}/>
			<main className={styles.Cart}>
				<CartTop/>
				<section className={styles.Cart__body}>
					<div className={`container ${styles.Cart__body_container}`}>

						<CartContent cartDataItems={data?.cart.items} loading={isLoading} success={isSuccess}/>
						<CartInfo totalPrice={data?.totalPrice} discount={data?.discount}/>
					</div>
				</section>
				<SimilarGoods category={'City'}/>
				<Subscribe/>
			</main>
		</>
	)
}

export default Cart
