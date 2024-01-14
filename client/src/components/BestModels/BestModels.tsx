import { FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import productService from '@services/product.service'

import { ICard } from 'Card'

import Card from '@components/Card/Card'
import Skeleton from '@components/Skeleton/Skeleton'

import styles from './BestModels.module.scss'
const BestModels: FC = () => {
	const fakeArr = [...Array(3)]
	const { data,isLoading,isSuccess } = useQuery({
		queryKey: ['bestProducts'],
		queryFn: () => productService.getProductsByLimit(3, 3),
	})
	return (
		<section className={styles.BestModels}>
			<div className="container">
				<div className={styles.BestModels__inner}>

				
					<h2 className={`title ${styles.BestModels__title}`}>
					Лучшие модели для зимней езды
					</h2>
					<ul className={`list-reset ${styles.BestModels__items}`}>
						{isLoading
							? fakeArr.map(item => <Skeleton key={item} type="primary"/>)
							: isSuccess
								? data?.data.map((item: ICard) => (
									<Card
										type="primary"
										country={item.country}
										prevPrice={item.prevPrice}
										price={item.price}
										title={item.title}
										available={item.available}
										previewImage={item.previewImage}
										id={item.id}
									/>
						  ))
								: 'Error'}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default BestModels
