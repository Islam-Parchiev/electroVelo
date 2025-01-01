import { FC } from 'react'
import { useQuery } from '@tanstack/react-query'

import { ICard } from '../../../../shared/types/Card'

import productService from '../../../../shared/services/product.service'

import { Skeleton, Card } from '../../../../shared/ui'

import styles from './MainNewItems.module.scss'
const MainNewItems: FC = () => {
	const fakeArr = [...Array(3)]
	const { data, isLoading, isSuccess } = useQuery<{ data: ICard[] }>({
		queryKey: ['newProducts'],
		queryFn: () => productService.getProductsByLimit(3, 0),
	})
	return (
		<section className={styles.MainNewItems}>
			<div className={`container ${styles.MainNewItems__container}`}>
				<h2 className="title">Новинки</h2>
				<ul className={`list-reset ${styles.MainNewItems__cards}`}>
					{/* <Skeleton /> */}
					{isLoading
						? fakeArr.map((_, i) => <Skeleton key={i} type="primary" />)
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
									key={item.id}
								/>
							))
							: 'Error'}


				</ul>
			</div>
		</section>
	)
}

export default MainNewItems
