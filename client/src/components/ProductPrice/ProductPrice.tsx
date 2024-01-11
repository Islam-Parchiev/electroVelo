import React from 'react'

import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import productService from '@services/product.service'

import { IProduct } from 'Card';

import styles from './ProductPrice.module.scss'


const ProductPrice: React.FC= () => {
	const {id} = useParams();
	//@ts-ignore
	const {data,isSuccess,isLoading} =  useQuery<any>({queryKey:['product',id],queryFn:()=>productService.getProductById(+id)});
	const product:IProduct = isSuccess&&data.data;
	return (
		<div className={styles.ProductPrice}>
			<span>{isLoading ? 'loading...' : isSuccess ? product.price : 'Error'}₽</span>
			{product&&product.prevPrice&&<span className={styles.ProductPrice__prevPrice}>{product.prevPrice} ₽</span>}
		</div>
	)
}

export default ProductPrice
