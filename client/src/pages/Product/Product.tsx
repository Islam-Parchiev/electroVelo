import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import productService  from '@services/product.service'

import Header from '@components/Header/Header'
import ProductMain from '@components/ProductMain/ProductMain'


import styles from './Product.module.scss';

const Product:React.FC = () => {
	const {id} = useParams();
	//@ts-ignore
	const {data} =  useQuery<any>({queryKey:['product'],queryFn:()=>productService.getProductById(+id)});
	console.log(data);
	return (
		<>
		  <Header otherClass={styles.Product__header}/>
			<main className="Product">
			
				<ProductMain productTitle={data?.data?.title}/>
			</main>
		</>
	)
}

export default Product
