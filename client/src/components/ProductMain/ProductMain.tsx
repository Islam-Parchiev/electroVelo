import React from 'react'

import ProductSlider from '@components/ProductSlider/ProductSlider'
import ProductInfo from '@components/ProductInfo/ProductInfo'

import { ICard } from 'Card'

import styles from './ProductMain.module.scss'

interface ProductMainProps {
	product: ICard
	loading: boolean
	success: boolean
}

const ProductMain: React.FC<ProductMainProps> = props => {
	const { product, loading, success} = props
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
							{loading
								? 'loading'
								: success
									? product.title
									: 'Error'}
						</a>
					</li>
				</ul>
				<div className={styles.ProductMain__wrapper}>
					<ProductSlider />
					<ProductInfo
						product={product}
						loading={loading}
						success={success}
				
					/>
				</div>
			</div>
		</section>
	)
}

export default ProductMain
