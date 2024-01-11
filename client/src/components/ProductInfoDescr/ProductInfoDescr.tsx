import React from 'react'

import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import productService from '@services/product.service'

import { IProduct } from 'Card';

import styles from './ProductInfoDescr.module.scss'

const ProductDescr: React.FC = () => {
	const {id} = useParams();
	//@ts-ignore
	const {data,isSuccess,isLoading} =  useQuery<any>({queryKey:['product',id],queryFn:()=>productService.getProductById(+id)});
	const product:IProduct = isSuccess&&data.data;
	return (
		<div className={styles.ProductInfoDescr}>
			<p>{isLoading ? 'loading...' : isSuccess ? product.description : 'Error'}</p>
		</div>
	)
}

export default ProductDescr
