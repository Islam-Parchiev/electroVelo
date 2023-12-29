import React from 'react'

import { useAppDispatch,useAppSelector } from '@redux/store'

import { changeCount } from '@redux/slices/productSlice'

import cartService from '@services/cart.service'
import favoritesService from '@services/favorites.service'

import Button from '@components/Button/Button'
import ProductPrice from '@components/ProductPrice/ProductPrice'
import ProductSocial from '@components/ProductSocial/ProductSocial'
import ProductInfoDescr from '@components/ProductInfoDescr/ProductInfoDescr'
import ProductSizes from '@components/ProductSizes/ProductSizes'
import ProductColors from '@components/ProductColors/ProductColors'
import Counter from '@components/Counter/Counter'

import { ICard } from 'Card'

import styles from './ProductInfo.module.scss'


interface ProductInfoProps {
	loading: boolean
	success: boolean
	product: ICard;
}

const ProductInfo: React.FC<ProductInfoProps> = props => {

	const { loading, success, product } = props
	const dispatch = useAppDispatch()
	const productCount= useAppSelector((state)=> state.product.count);
	const onClickPlus = ()=> {
		dispatch(changeCount(1))
	 }
	 const onClickMinus = ()=> {
		dispatch(changeCount(-1))
	 }
	 if(productCount<1) {
		dispatch(changeCount(1))
	}
	const addToCart=()=> {
		// @ts-ignore
		const data = cartService.addToCart(+product.id,1);
		data.then(data=>console.log(data));
	}
	const addToFavorites = ()=> {
		const data = favoritesService.addToFavorites(+product.id);
		data.then(data=> console.log(data));
	}
	return (
		<div className={styles.ProductInfo}>
			<div className={styles.ProductInfo__top}>
				<h1 className={styles.ProductInfo__title}>{product.title}</h1>
				<ProductSocial loading={loading} success={success} product={product}/>
				<ProductPrice loading={loading} success={success} product={product}/>
				<ProductInfoDescr loading={loading} success={success} product={product}/>
				<ProductSizes loading={loading} success={success} product={product}/>
				<ProductColors loading={loading} success={success} product={product}/>
			</div>
			<div className={styles.ProductInfo__bottom}>
				{/* TODO:Fix Counter */}
				<Counter onClickPlus={onClickPlus} onClickMinus={onClickMinus} count={productCount}/>
				<Button otherClass={styles.ProductInfo__addToCart} handleClick={addToCart}>В корзину</Button>
				<Button otherClass={`${styles.ProductInfo__addToFavorites}`} handleClick={addToFavorites}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="29"
						viewBox="0 0 32 29">
						<path
							d="M4.67757 14.34L16.5 26.4464L28.3224 14.34C29.6367 12.9941 30.375 11.1688 30.375 9.26553C30.375 
							5.30217 27.2374 2.08923 23.367 2.08923C21.5084 2.08923 19.7259 2.84531 18.4117 4.19112L16.5 6.14876L14.5883 
							4.19112C13.274 2.84531 11.4916 2.08923 9.63294 2.08923C5.76255 2.08923 2.625 5.30217 2.625 9.26553C2.625 11.1688 
							3.36333 12.9941 4.67757 14.34Z"
							stroke="#F57520"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</Button>
			</div>
		</div>
	)
}

export default ProductInfo
