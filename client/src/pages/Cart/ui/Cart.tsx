import { FC } from 'react'

import { useQuery } from '@tanstack/react-query'

import { ICartData } from 'Cart';

import CartTop from '@pages/Cart/ui/CartTop/CartTop';
import CartContent from '@pages/Cart/ui/CartContent/CartContent';
import CartInfo from '@pages/Cart/ui/CartInfo/CartInfo';

import SimilarGoods from '../../../widgets/SimilarGoods/SimilarGoods';
import Subscribe from '../../../widgets/Subscribe/Subscribe';
import Header from '../../../widgets/Header/Header'
import cartService from '../../../shared/services/cart.service'

import styles from './Cart.module.scss';

export const Cart: FC = () => {
	const { data, isLoading, isSuccess } = useQuery<ICartData>({
		queryKey: ['cartItems'],
		queryFn: () => cartService.getCart(),
	})


	return (
		<>
			<Header otherClass="FixedHeader" />
			<main className={styles.Cart}>
				<CartTop />
				<section className={styles.Cart__body}>
					<div className={`container ${styles.Cart__body_container}`}>

						<CartContent cartDataItems={data?.cart.items} loading={isLoading} success={isSuccess} />
						<CartInfo totalPrice={data?.totalPrice} discount={data?.discount} />
					</div>
				</section>
				<SimilarGoods category={'City'} />
				<Subscribe />
			</main>
		</>
	)
}
