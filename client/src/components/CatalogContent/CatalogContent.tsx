import React, { useState } from 'react'

import { useQuery } from '@tanstack/react-query'
import { useAppSelector } from '@redux/store'

import Filters from '@components/Filters/Filters'
import CatalogSort from '@components/CatalogSort/CatalogSort'
import CatalogView from '@components/CatalogView/CatalogView'
import Card from '@components/Card/Card'
import Pagination from '@components/Pagination/Pagination'

import productService  from '@services/product.service'
import { ICard } from 'Card'

import styles from './CatalogContent.module.scss'

const CatalogContent:React.FC = () => {
	const [page,setPage] = useState(1);
	const sortProperty = useAppSelector((state)=> state.sort.sortProperty);
	const filtersValue = useAppSelector((state)=> state.filters);
	const categoriesValue = useAppSelector((state)=> state.filters.selectedCategories)
	const query = useQuery<{data:any}>({ queryKey: ['catalogProducts',page,sortProperty,filtersValue.available,categoriesValue], 
		queryFn:()=> productService.getProductsByFilters(page,6,sortProperty,filtersValue.available.toString(),categoriesValue)})
	
	console.log(page);
	console.log(query.data?.data.totalPages);
	return (
		<section className={styles.CatalogContent}>
			<div className="container">
				<div className={styles.CatalogContent__wrapper}>
					<Filters />
					<div className={styles.CatalogContent__right}>
						<div className={styles.CatalogContent__top}>
							<CatalogSort />
							<CatalogView />
						</div>
						<div className={styles.CatalogGoods}>
							<ul
								className={`list-reset ${styles.CatalogGoods__list}`}>
								{query.data?.data.data.map((item: ICard) => (
									<Card
										type="secondary"
										otherClass={styles.CatalogGoods__card}
										price={item.price}
										title={item.title}
										available={item.available}
										images={item.previewImage}
									/>
								))}
							</ul>
						</div>
						<Pagination totalPages={query.data?.data.totalPages} setPage={setPage} page={page}/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CatalogContent
