import React from 'react'

import styles from './DeliveryPreview.module.scss'

const DeliveryPreview: React.FC = () => {
	return (
		<section className={styles.DeliveryPreview}>
			<div className="container">
				<div className={styles.DeliveryPreview__inner}>
					<ul className={`list-reset ${styles.Breadcrumbs}`}>
						<li className={styles.Breadcrumbs__item}>
							<a href="/">Главная</a>
						</li>
						<li className={styles.Breadcrumbs__item}>
							<a href="/">Доставка и оплата</a>
						</li>
					</ul>
					<h1 className={styles.DeliveryPreview__title}>
						Доставка и оплата
					</h1>
				</div>
			</div>
		</section>
	)
}

export default DeliveryPreview
