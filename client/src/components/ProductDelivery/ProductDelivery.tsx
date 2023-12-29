import React from 'react'

import styles from './ProductDelivery.module.scss'


const ProductDelivery:React.FC = () => {
	return (
		<section className={styles.ProductDelivery}>
			<div className="container">
				<h2 className={styles.ProductDelivery__title}>Доставка</h2>
				<div className={styles.ProductDelivery__wrapper}>
					<div className={styles.ProductDelivery__image}>
						<img src="/images/Product/deliveryBg.jpg" alt="" />
					</div>
					<div className={styles.ProductDelivery__info}>
						<h4>Для удобства покупателей действует несколько способов доставки товаров</h4>
						<ul className={styles.ProductDelivery__list}>
							<li className={styles.ProductDelivery__item}>
							Доставка по Москве, в пределах МКАД
							</li>
							<li className={styles.ProductDelivery__item}>
							Доставка по Москве, в пределах МКАД
							</li>
							<li className={styles.ProductDelivery__item}>
							Доставка по Москве, в пределах МКАД
							</li>

						</ul>
						<span className={styles.ProductDelivery__notice}>
						Любой из способов доступен при оформление заказа через сайт или у операторов
						</span>
						<span className={styles.ProductDelivery__phone}>
						На любые вопросы по правилам и стоимости доставки ответят оператор: <a href="tel:+74950557586">+7 (495) 055-75-86</a>
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProductDelivery
