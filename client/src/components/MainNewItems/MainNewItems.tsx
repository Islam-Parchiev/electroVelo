import { FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import { ICard } from 'Card'

import productService from '../../services/product.service'
import Card from '../../components/Card/Card'

import styles from './MainNewItems.module.scss'
const MainNewItems: FC = () => {
	const { data } = useQuery<{ data: ICard[] }>({
		queryKey: ['newProducts'],
		queryFn: () => productService.getProductsByLimit(3, 0),
	})
	console.log(data)
	return (
		<section className={styles.MainNewItems}>
			<div className={`container ${styles.MainNewItems__container}`}>
				<h2 className="title">Новинки</h2>
				<ul className={`list-reset ${styles.MainNewItems__cards}`}>
					{data?.data.map((item: ICard) => (
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
					))}
				</ul>
			</div>
		</section>
	)
}

export default MainNewItems
