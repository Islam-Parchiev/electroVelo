import { FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import productService from '@services/product.service'

import Card from '@components/Card/Card'

import styles from './BestModels.module.scss'
const BestModels: FC = () => {
	const {data} = useQuery({ queryKey: ['bestProducts'], queryFn:()=> productService.getProductsByLimit(3,3)  })
	return (
		<section className={styles.BestModels}>
			<div className={`container ${styles.BestModels__container}`}>
				<h2 className={`title ${styles.BestModels__title}`}>Лучшие модели для зимней езды</h2>
				<ul className={`list-reset ${styles.BestModels__items}`}>
					{
						data?.data.map((item:any)=>(
							<Card type="primary" countrySrc={item.country} price={item.price} title={item.title} available={item.available} images={item.previewImage}/>
						))
			 }
				</ul>
			</div>
		</section>
	)
}

export default BestModels
