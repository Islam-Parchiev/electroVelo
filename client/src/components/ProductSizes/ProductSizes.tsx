import React from 'react'

import { ICard } from 'Card';

import { useAppDispatch, useAppSelector } from '@redux/store';
import { changeSize } from '@redux/slices/productSlice';

import styles from './ProductSizes.module.scss'

interface ProductSizesProps {
	success:any;
	loading:any;
	product:ICard;
}

const ProductSizes: React.FC<ProductSizesProps> = props => {
	const {
		success,
		loading,
		product,
	} = props;
	const dispatch =useAppDispatch();
	const productSize = useAppSelector((state)=> state.product.size);
	const handleClickSize = (size:string)=> {
		dispatch(changeSize(size));
	 }
	return (
		<div className={styles.ProductSizes}>
			<h3>Размер:</h3>
			<ul className={`list-reset ${styles.ProductSizes__list}`}>
				{loading
					? 'Loading...'
					: success
					? product.sizes?.map(item => (
							<li
								className={`${styles.ProductSizes__item} ${
									item.size === productSize && styles.active
								}`}
								onClick={() => handleClickSize(item.size)}>
								{item.size}
							</li>
					  ))
					: 'Error'}
			</ul>
		</div>
	)
}

export default ProductSizes
