import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import productService  from '@services/product.service'

import Header from '@components/Header/Header'
import { ICard } from 'Card'

const Product:React.FC = () => {
	const {id} = useParams();
	//@ts-ignore
	const product =  useQuery<ICard>({queryKey:['product'],queryFn:()=>productService.getProductById(+id)});
	console.log(product);
	return (
		<>
		  <Header/>
			<main className="Product">
			das
			</main>
		</>
	)
}

export default Product
