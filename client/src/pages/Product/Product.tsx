import React from 'react'

import Header from '@components/Header/Header'
import ProductMain from '@components/ProductMain/ProductMain'
import ProductDescription from '@components/ProductDescription/ProductDescription'
import ProductSpecifications from '@components/ProductSpecifications/ProductSpecifications'
import ProductDelivery from '@components/ProductDelivery/ProductDelivery'
import SimilarGoods from '@components/SimilarGoods/SimilarGoods'
import Subscribe from '@components/Subscribe/Subscribe'


import styles from './Product.module.scss';

const Product:React.FC = () => {
	return (
		<>
		  <Header otherClass={styles.Product__header}/>
			<main className="Product">
			
				<ProductMain/>
				<ProductDescription/>
				<ProductSpecifications/>

				<ProductDelivery/>
				<SimilarGoods category={'City'}/>
				<Subscribe/>
			</main>
		</>
	)
}

export default Product
