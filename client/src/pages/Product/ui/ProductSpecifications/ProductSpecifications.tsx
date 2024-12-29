import React from 'react'

import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import productService from '../../../../shared/services/product.service'

import { ResponseProduct } from 'Card'

import styles from './ProductSpecifications.module.scss'

const ProductSpecifications: React.FC = () => {
	const { id } = useParams()
	//@ts-ignore
	const { data, isLoading, isSuccess } = useQuery<any>({ queryKey: ['product', id], queryFn: () => productService.getProductById(+id) })
	const product: ResponseProduct = isSuccess && data.data
	return (
		<section className={styles.ProductSpecifications}>
			<div className="container">
				<div className={styles.ProductSpecifications__wrapper}>
					<h2 className={styles.ProductSpecifications__title}>
						Характеристики
					</h2>
					<ul className={`list-reset ${styles.SpecificationsList}`}>
						<li className={styles.SpecificationsItem}>
							<h5 className={styles.SpecificationsItem__title}>
								Бренд
							</h5>
							<span className={styles.SpecificationsItem__value}>
								{isLoading
									? 'Загрузка...'
									: isSuccess
										? product.specifications[0].brand
										: 'Error'}
							</span>
						</li>
						<li className={styles.SpecificationsItem}>
							<h5 className={styles.SpecificationsItem__title}>
								Категория
							</h5>
							<span className={styles.SpecificationsItem__value}>
								{isLoading
									? 'Загрузка...'
									: isSuccess
										? product.specifications[0].category
										: 'Error'}
							</span>
						</li>
						<li className={styles.SpecificationsItem}>
							<h5 className={styles.SpecificationsItem__title}>
								Материал
							</h5>
							<span className={styles.SpecificationsItem__value}>
								{isLoading
									? 'Загрузка...'
									: isSuccess
										? product.specifications[0].material
										: 'Error'}
							</span>
						</li>
						<li className={styles.SpecificationsItem}>
							<h5 className={styles.SpecificationsItem__title}>
								Год
							</h5>
							<span className={styles.SpecificationsItem__value}>
								{isLoading
									? 'Загрузка...'
									: isSuccess
										? product.specifications[0].year
										: 'Error'}
							</span>
						</li>
						<li className={styles.SpecificationsItem}>
							<h5 className={styles.SpecificationsItem__title}>
								Страна
							</h5>
							<span className={styles.SpecificationsItem__value}>
								{isLoading
									? 'Загрузка...'
									: isSuccess
										? product.specifications[0].country
										: 'Error'}
							</span>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default ProductSpecifications
