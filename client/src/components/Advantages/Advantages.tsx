import React from 'react'

import styles from './Advantages.module.scss'

const Advantages: React.FC = props => {
	return (
		<section className={styles.Advantages}>
			<div className="container">
				<h2 className="title">Преимущества</h2>
			</div>
			<div className={styles.Advantages__body}>
				<div className={styles.Advantages__img}>
					<img src="/images/Main/advantages1.jpg" alt="" />
				</div>
				<ul className={`list-reset ${styles.Advantages__list}`}>
					<li className={styles.AdvantagesItem}>
						<h4 className={styles.AdvantagesItem__title}>
							БЕСПЛАТНАЯ ДОСТАВКА
						</h4>
						<p>Мы пользуемся всеми популярными видами доставки</p>
						<button
							className={`btn-reset ${styles.AdvantagesItem__btn}`}>
							Подробнее
						</button>
					</li>
					<li className={styles.AdvantagesItem}>
						<h4 className={styles.AdvantagesItem__title}>
							БЕСПЛАТНАЯ ДОСТАВКА
						</h4>
						<p>Мы пользуемся всеми популярными видами доставки</p>
						<button
							className={`btn-reset ${styles.AdvantagesItem__btn}`}>
							Подробнее
						</button>
					</li>
					<li className={styles.AdvantagesItem}>
						<h4 className={styles.AdvantagesItem__title}>
							БЕСПЛАТНАЯ ДОСТАВКА
						</h4>
						<p>Мы пользуемся всеми популярными видами доставки</p>
						<button
							className={`btn-reset ${styles.AdvantagesItem__btn}`}>
							Подробнее
						</button>
					</li>
					<li className={styles.AdvantagesItem}>
						<h4 className={styles.AdvantagesItem__title}>
							БЕСПЛАТНАЯ ДОСТАВКА
						</h4>
						<p>Мы пользуемся всеми популярными видами доставки</p>
						<button
							className={`btn-reset ${styles.AdvantagesItem__btn}`}>
							Подробнее
						</button>
					</li>
					
				</ul>
				<div className={styles.Advantages__img}>
					<img src="/images/Main/advantages2.jpg" alt="" />
				</div>
			</div>
		</section>
	)
}

export default Advantages
