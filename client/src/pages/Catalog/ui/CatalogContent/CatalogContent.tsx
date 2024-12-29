import React, { useState } from 'react'

import Filters from '@pages/Catalog/ui/Filters/Filters'
import CatalogSort from '@pages/Catalog/ui/CatalogSort/CatalogSort'
import CatalogView from '@pages/Catalog/ui/CatalogView/CatalogView'
import MobileFilters from '@pages/Catalog/ui/Filters/MobileFilters/MobileFilters'

import HeaderMenu from './../../../../widgets/Header/HeaderMenu/HeaderMenu'

import { Pagination, Skeleton, Card } from '../../../../shared/ui'

import { useCatalog } from './useCatalog'

import styles from './CatalogContent.module.scss'

const CatalogContent: React.FC = () => {
	const [open, setOpen] = useState(false);
	const fakeArr = [...Array(6)]
	const { products, totalPages, page, setPage, isLoading, isSuccess } = useCatalog()
	return (
		<section className={styles.CatalogContent}>
			<div className="container">
				<div className={styles.CatalogContent__wrapper}>
					<Filters anotherClass={styles.Desktop__filters} />
					{open && <HeaderMenu handleOpen={setOpen}>
						<MobileFilters
							handleOpen={setOpen}
							productsCount={isSuccess ? products.length : 0}
							loading={isLoading}
							success={isSuccess} />
					</HeaderMenu>}
					<div className={styles.CatalogContent__right}>
						<div className={styles.CatalogContent__top}>
							<CatalogSort />
							<div className={styles.CatalogView__wrapper}>
								<CatalogView />
								<button className={styles.Filters__open} onClick={() => setOpen(true)}>
									<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
										<path d="M5.33301 5.33337L11.9997 16V24L19.9997 28V16L26.6663 5.33337H5.33301Z" stroke="#777777"
											strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</button>
							</div>
						</div>
						<div className={styles.CatalogGoods}>
							<ul
								className={`list-reset ${styles.CatalogGoods__list}`}>
								{isLoading
									? fakeArr.map((_, i) => <Skeleton key={i} type="seconadry" />)
									: isSuccess
										? products.map(item => (
											<Card
												type="secondary"
												id={item.id}
												otherClass={
													styles.CatalogGoods__card
												}
												price={item.price}
												title={item.title}
												available={item.available}
												previewImage={
													item.previewImage
												}
												prevPrice={item.prevPrice}
												country={item.country}
												key={item.id}
											/>
										))
										: 'Error'}
							</ul>
						</div>
						<Pagination
							totalPages={totalPages}
							setPage={setPage}
							page={page}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CatalogContent
