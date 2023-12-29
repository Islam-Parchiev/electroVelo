import React from 'react'

import { ICard } from 'Card';

import styles from './ProductInfoDescr.module.scss'

interface ProductDescrProps {
	loading:boolean;
	success:boolean;
	product:ICard;
}

const ProductDescr: React.FC<ProductDescrProps> = props => {
	const {
		loading,
		success,
		product,
	} = props
	return (
		<div className={styles.ProductInfoDescr}>
			<p>{loading ? 'loading...' : success ? product.description : 'Error'}</p>
		</div>
	)
}

export default ProductDescr
