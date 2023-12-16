import React from 'react'

import styles from './CartTop.module.scss'

const CartTop:React.FC = () => {

	return (
		<section className={styles.CartTop}>
			<div className="container">
				<div className={styles.CartTop__wrapper}>
					<ul className={`list-reset ${styles.Breadcrumbs}`}>
						<li className={styles.Breadcrumbs__item}>
							<a href="/">
								Главная
							</a>
						</li>
						<li className={styles.Breadcrumbs__item}>
							<a href="/">
							Корзина
							</a>
						</li>
						
					</ul>
					<h1 className={styles.CartTop__title}>Корзина</h1>
				</div>
			</div>
		</section>
	)
}

export default CartTop
