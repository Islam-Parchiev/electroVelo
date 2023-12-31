import React from 'react'

import styles from './CreateOrderTop.module.scss'

interface CreateOrderTopProps {}

const CreateOrderTop: React.FC<CreateOrderTopProps> = props => {
	const {} = props
	return (
		<section className={styles.CreateOrderTop}>
			<div className="container">
				<div className={styles.CreateOrderTop__wrapper}>
					<ul className={`list-reset ${styles.Breadcrumbs}`}>
						<li className={styles.Breadcrumbs__item}>
							<a href="/">Главная</a>
						</li>
						<li className={styles.Breadcrumbs__item}>
							<a href="/"> Оформление заказа</a>
						</li>
					
					</ul>
					<h1 className={styles.CreateOrderTop__title}>Оформление заказа</h1>
				</div>
			</div>
		</section>
	)
}

export default CreateOrderTop
