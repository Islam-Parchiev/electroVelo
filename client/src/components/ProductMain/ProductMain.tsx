import React from 'react'

import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import productService from '@services/product.service'

import ProductSlider from '@components/ProductSlider/ProductSlider'
import ProductInfo from '@components/ProductInfo/ProductInfo'

import { ICard } from 'Card'

import styles from './ProductMain.module.scss'

const ProductMain: React.FC = () => {
	const { id } = useParams()
	//@ts-ignore
	const { data, isLoading, isSuccess } = useQuery<any>({queryKey: ['product', id],queryFn: () => productService.getProductById(+id)})
	const product: ICard = isSuccess && data.data
	console.log('maxin', data)
	return (
		<section className={styles.ProductMain}>
			<div className="container">
				<ul className={`list-reset ${styles.Breadcrumbs}`}>
					<li className={styles.Breadcrumbs__item}>
						<a href="/">Главная</a>
					</li>
					<li className={styles.Breadcrumbs__item}>
						<a href="/">Велосипеды</a>
					</li>
					<li className={styles.Breadcrumbs__item}>
						<a href="/">Горные велосипеды</a>
					</li>
					<li className={styles.Breadcrumbs__item}>
						<a href="/">
							{isLoading
								? 'loading'
								: isSuccess
									? product.title
									: 'Error'}
						</a>
					</li>
				</ul>
				<div className={styles.ProductMain__wrapper}>
					<ProductSlider />
					<ProductInfo />
				</div>
			</div>
		</section>
	)
}

export default ProductMain
