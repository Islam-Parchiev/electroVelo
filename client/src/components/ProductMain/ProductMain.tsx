import React from 'react'

import ProductSlider from '@components/ProductSlider/ProductSlider';
import ProductInfo from '@components/ProductInfo/ProductInfo';

import styles from './ProductMain.module.scss'

interface ProductMainProps {
	productTitle:string;
}

const ProductMain:React.FC<ProductMainProps> = (props) => {
	const {
		productTitle,
	} = props;
	return (
		<section className={styles.ProductMain}>
			<div className="container">
				<ul className={`list-reset ${styles.Breadcrumbs}`}>
						<li className={styles.Breadcrumbs__item}>
							<a href="/">
								Главная
							</a>
						</li>
						<li className={styles.Breadcrumbs__item}>
							<a href="/">
							Велосипеды 
							</a>
						</li>
						<li className={styles.Breadcrumbs__item}>
							<a href="/">
							Горные велосипеды 
							</a>
						</li>
						<li className={styles.Breadcrumbs__item}>
							<a href="/">
								{productTitle}
							</a>
						</li>
				</ul>
				<div className={styles.ProductMain__wrapper}>
					<ProductSlider/>
					<ProductInfo/>
				</div>
			</div>
		</section>
	)
}

export default ProductMain
