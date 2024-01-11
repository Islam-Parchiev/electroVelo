import React from 'react'

import styles from './BasicServices.module.scss'

const BasicServices: React.FC = () => {
	return (
		<section className={styles.BasicServices}>
			<div className="container">
				<div className={styles.BasicServices__inner}>
					<h2 className={styles.BasicServices__title}>
						Стоимость Основных услуг
					</h2>
					<div className={styles.BasicServices__content}>
						<ul className={`list-reset ${styles.BasicServices__list}`}>
							<li className={styles.BasicServices__item}>
								<span
									className={styles.BasicServices__item_title}>
									Диагностика
								</span>
								<span
									className={styles.BasicServices__item_price}>
									Бесплатно
								</span>
							</li>
							<li className={styles.BasicServices__item}>
								<span
									className={styles.BasicServices__item_title}>
									Диагностика
								</span>
								<span
									className={styles.BasicServices__item_price}>
									Бесплатно
								</span>
							</li>
							<li className={styles.BasicServices__item}>
								<span
									className={styles.BasicServices__item_title}>
									Диагностика
								</span>
								<span
									className={styles.BasicServices__item_price}>
									Бесплатно
								</span>
							</li>
							<li className={styles.BasicServices__item}>
								<span
									className={styles.BasicServices__item_title}>
									Диагностика
								</span>
								<span
									className={styles.BasicServices__item_price}>
									Бесплатно
								</span>
							</li>
							<li className={styles.BasicServices__item}>
								<span
									className={styles.BasicServices__item_title}>
									Диагностика
								</span>
								<span
									className={styles.BasicServices__item_price}>
									Бесплатно
								</span>
							</li>
							<li className={styles.BasicServices__item}>
								<span
									className={styles.BasicServices__item_title}>
									Диагностика
								</span>
								<span
									className={styles.BasicServices__item_price}>
									Бесплатно
								</span>
							</li>
							<li className={styles.BasicServices__item}>
								<span
									className={styles.BasicServices__item_title}>
									Диагностика
								</span>
								<span
									className={styles.BasicServices__item_price}>
									Бесплатно
								</span>
							</li>
							<li className={styles.BasicServices__item}>
								<span
									className={styles.BasicServices__item_title}>
									Диагностика
								</span>
								<span
									className={styles.BasicServices__item_price}>
									Бесплатно
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BasicServices
