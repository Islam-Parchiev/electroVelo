import React from 'react'

import styles from './ProductDescription.module.scss'

interface ProductDescriptionProps {}

const ProductDescription:React.FC<ProductDescriptionProps> = (props) => {
	const {} = props;
	return (
		<section className={styles.ProductDescription}>
			<div className="container">
				<div className={styles.ProductDescription__wrapper}>
					<h2 className={styles.ProductDescription__title}>Описание</h2>
					<p>Профессиональный гоночный хардтейл для кросс-кантри уровня Чемпионата и Кубка Мира. 
						Одна из самых лёгких рам среди гоночных хардтейлов для кросс-кантри. Scott Scale 700 
						RC — это рама из композитного волокна HMX, гоночная трансмиссия Sram XX1/X01 1×11, 
						дисковые тормоза Shimano XTR M9000 и гоночные колеса Syncros XR RC. Байк Нино Шуртера 
						для шорт-трек кросс-кантри.</p>
				</div>
			</div>
		</section>
	)
}

export default ProductDescription
