import React from 'react'

import styles from './ProductSpecifications.module.scss'

interface ProductSpecificationsProps {
	productSpecifications:any;
	loading:any;
	success:any;
}

const ProductSpecifications:React.FC<ProductSpecificationsProps> = (props) => {
	const {
		productSpecifications,
		loading,
		success,
	} = props;
	return (
		<section className={styles.ProductSpecifications}>
			<div className="container">
				<div className={styles.ProductSpecifications__wrapper}>
					<h2 className={styles.ProductSpecifications__title}>
						Характеристики
					</h2>
					<ul className={`list-reset ${styles.SpecificationsList}`}>
						<li className={styles.SpecificationsItem}>
							<h5 className={styles.SpecificationsItem__title}>Бренд</h5>
							<span className={styles.SpecificationsItem__value}>
								{
									loading ? 'Загрузка...':productSpecifications[0].brand
								}		
							</span>
						</li>
						<li className={styles.SpecificationsItem}>
							<h5 className={styles.SpecificationsItem__title}>Категория</h5>
							<span className={styles.SpecificationsItem__value}>
								{
									loading ? 'Загрузка...':productSpecifications[0].category
								}		
								
								
							</span>
						</li>
						<li className={styles.SpecificationsItem}>
							<h5 className={styles.SpecificationsItem__title}>Материал</h5>
							<span className={styles.SpecificationsItem__value}>
								{
									loading ? 'Загрузка...':productSpecifications[0].material
								}	
							
							</span>
						</li>
						<li className={styles.SpecificationsItem}>
							<h5 className={styles.SpecificationsItem__title}>Год</h5>
							<span className={styles.SpecificationsItem__value}>
								{
									loading ? 'Загрузка...':productSpecifications[0].year
								}	
							
							</span>
						</li>
						<li className={styles.SpecificationsItem}>
							<h5 className={styles.SpecificationsItem__title}>Страна</h5>
							<span className={styles.SpecificationsItem__value}>
								{
									loading ? 'Загрузка...':productSpecifications[0].country
								}
								
							</span>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default ProductSpecifications
