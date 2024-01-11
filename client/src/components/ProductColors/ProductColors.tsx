import React from 'react'

import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import productService from '@services/product.service'

import { IProduct } from 'Card'

import { useAppDispatch, useAppSelector } from '@redux/store'
import { changeColor } from '@redux/slices/productSlice'

import styles from './ProductColors.module.scss'

const ProductColors: React.FC = () => {
	const { id } = useParams()
	//@ts-ignore
	const { data, isSuccess, isLoading } = useQuery<any>({queryKey: ['product', id],queryFn: () => productService.getProductById(+id)})
	const product: IProduct = isSuccess && data.data

	const productColor = useAppSelector(state => state.product.color)

	const dispatch = useAppDispatch()
	const handleClickColor = (color: string) => {
		dispatch(changeColor(color))
	}

	React.useEffect(() => {
		if (isSuccess && product && product.colors) {
			dispatch(changeColor(product.colors[0].color))
		}
	}, [])
	return (
		<div className={styles.ProductColors}>
			<h3>Цвет:</h3>
			<ul className={`list-reset ${styles.ProductColors__list}`}>
				{isLoading
					? 'Loading...'
					: isSuccess
						? product.colors?.map(color => (
							<li
								key={color.id}
								style={{
									backgroundColor: color.hexColor,
								}}
								className={`${styles.ProductColors__item} ${
									color.color === productColor && styles.active
								}`}
								onClick={() =>
									handleClickColor(color.color)
								}></li>
					  ))
						: 'Error'}
			</ul>
		</div>
	)
}

export default ProductColors
