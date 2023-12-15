import React from 'react'

import { ICard } from 'Card';

import styles from './ProductPrice.module.scss'

interface ProductPriceProps {
	loading:any;
	success:any;
	product:ICard;
}

const ProductPrice: React.FC<ProductPriceProps> = props => {
	const {
		success,
		loading,
		product,
	} = props
	return (
		<div className={styles.ProductPrice}>
			<span>{loading ? 'loading...' : success ? product.price : 'Error'}₽</span>
			{product&&product.prevPrice&&<span className={styles.ProductPrice__prevPrice}>{product.prevPrice} ₽</span>}
		</div>
	)
}

export default ProductPrice
