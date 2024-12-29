import React from 'react'

import { AxiosResponse } from 'axios'

import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'


import ProductSlider from '@pages/Product/ui/ProductSlider/ProductSlider'
import ProductInfo from '@pages/Product/ui/ProductInfo/ProductInfo'

import { ResponseProduct } from 'Card'

import productService from '../../../../shared/services/product.service'

import { Breadcrumbs } from '../../../../shared/ui'

import styles from './ProductMain.module.scss'

const ProductMain: React.FC = () => {
	const { id } = useParams()
	// @ts-ignore
	const { data, isLoading, isSuccess } = useQuery<AxiosResponse<ResponseProduct>>({ queryKey: ['product', id], queryFn: () => productService.getProductById(+id) });
	const productTitle = isLoading ? 'loading' : isSuccess ? data.data.title : 'Error'

	return (
		<section className={styles.ProductMain}>
			<div className="container">
				<Breadcrumbs color="b" paths={['Главная', 'Велосипеды', 'Горные велосипеды', productTitle]} />
				<div className={styles.ProductMain__wrapper}>
					<ProductSlider />
					<ProductInfo />
				</div>
			</div>
		</section>
	)
}

export default ProductMain
