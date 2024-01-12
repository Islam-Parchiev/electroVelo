import React from 'react'

import {AxiosResponse} from 'axios'

import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import productService from '@services/product.service'

import ProductSlider from '@components/ProductSlider/ProductSlider'
import ProductInfo from '@components/ProductInfo/ProductInfo'

import { ResponseProduct } from 'Card'

import styles from './ProductMain.module.scss'

const ProductMain: React.FC = () => {
	const { id } = useParams()
	// @ts-ignore
	const { data, isLoading, isSuccess } = useQuery<AxiosResponse<ResponseProduct>>({queryKey: ['product', id],queryFn: () => productService.getProductById(+id)});
	const productTitle = isLoading	? 'loading': isSuccess ? data.data.title: 'Error'
	
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
							{productTitle}
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
