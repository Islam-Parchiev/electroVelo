import React from 'react'

import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import { IProduct } from '../../../../shared/types/Card';

import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks';

import productService from '../../../../shared/services/product.service'
import { changeSize } from '../../../../entities/Product/model/productSlice';

import styles from './ProductSizes.module.scss'

const ProductSizes: React.FC = () => {
	const { id } = useParams();
	//@ts-ignore
	const { data, isSuccess, isLoading } = useQuery<any>({ queryKey: ['product', id], queryFn: () => productService.getProductById(+id) });
	const product: IProduct = isSuccess && data.data;

	const dispatch = useAppDispatch();
	const productSize = useAppSelector((state) => state.product.size);
	const handleClickSize = (size: string) => {
		dispatch(changeSize(size));
	}
	React.useEffect(() => {
		if (isSuccess && product && product.sizes) {
			dispatch(changeSize(product.sizes[0].size))
		}
	}, [])
	return (
		<div className={styles.ProductSizes}>
			<h3>Размер:</h3>
			<ul className={`list-reset ${styles.ProductSizes__list}`}>
				{isLoading
					? 'Loading...'
					: isSuccess
						? product.sizes?.map(item => (
							<li
								key={item.id}
								className={`${styles.ProductSizes__item} ${item.size === productSize && styles.active
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
