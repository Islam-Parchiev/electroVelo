import React from 'react'

import styles from './ProductSpecifications.module.scss'

interface IProductSpecification {
	brand:string; 
	category:string;
	country:string;
	id: number;
	material:string;
	year: number;
}
interface ProductSpecificationsProps {
	productSpecifications:IProductSpecification[];
	loading:boolean;
	success:boolean;
}

const ProductSpecifications:React.FC<ProductSpecificationsProps> = (props) => {
	const {
		productSpecifications,
		loading,
		success,
	} = props;
	console.log('specccccccs',productSpecifications);
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
									loading ? 'Загрузка...':success?productSpecifications[0].brand:'Error'
								}		
							</span>
						</li>
						<li className={styles.SpecificationsItem}>
							<h5 className={styles.SpecificationsItem__title}>Категория</h5>
							<span className={styles.SpecificationsItem__value}>
								{
									loading ? 'Загрузка...':success?productSpecifications[0].category:'Error'
								}		
								
								
							</span>
						</li>
						<li className={styles.SpecificationsItem}>
							<h5 className={styles.SpecificationsItem__title}>Материал</h5>
							<span className={styles.SpecificationsItem__value}>
								{
									loading ? 'Загрузка...':success?productSpecifications[0].material:'Error'
								}	
							
							</span>
						</li>
						<li className={styles.SpecificationsItem}>
							<h5 className={styles.SpecificationsItem__title}>Год</h5>
							<span className={styles.SpecificationsItem__value}>
								{
									loading ? 'Загрузка...':success?productSpecifications[0].year:'Error'
								}	
							
							</span>
						</li>
						<li className={styles.SpecificationsItem}>
							<h5 className={styles.SpecificationsItem__title}>Страна</h5>
							<span className={styles.SpecificationsItem__value}>
								{
									loading ? 'Загрузка...':success?productSpecifications[0].country:'Error'
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
