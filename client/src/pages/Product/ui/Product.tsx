import React from 'react'

import ProductMain from '@pages/Product/ui/ProductMain/ProductMain'
import ProductDescription from '@pages/Product/ui/ProductDescription/ProductDescription'
import ProductSpecifications from '@pages/Product/ui/ProductSpecifications/ProductSpecifications'
import ProductDelivery from '@pages/Product/ui/ProductDelivery/ProductDelivery'

import SimilarGoods from '../../../widgets/SimilarGoods/SimilarGoods'
import Subscribe from '../../../widgets/Subscribe/Subscribe'
import Header from '../../../widgets/Header/Header'

export const Product: React.FC = () => {
	return (
		<>
			<Header otherClass="FixedHeader" />
			<main className="Product">

				<ProductMain />
				<ProductDescription />
				<ProductSpecifications />

				<ProductDelivery />
				<SimilarGoods category={'City'} />
				<Subscribe />
			</main>
		</>
	)
}

