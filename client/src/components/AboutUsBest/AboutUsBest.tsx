import React from 'react'

import BestCard from '@components/BestCard/BestCard'
import AboutUsSubtitle from '@components/AboutUsSubtitle/AboutUsSubtitle'

import styles from './AboutUsBest.module.scss'

const AboutUsBest: React.FC = () => {
	return (
		<section className={styles.AboutUsBest}>
			<div className="container">
				<div className={styles.AboutUsBest__inner}>
					<AboutUsSubtitle variant="black">
						МЫ СОБРАЛИ ДЛЯ ВАС ЛУЧШЕЕ ИЗ ВЕЛОСИПЕДНОГО МирА
					</AboutUsSubtitle>
					<div className={styles.AboutUsBest__descr}>
						<p>
							World-Bike специализируется на продаже и обслуживании
							велосипедов, запчастей, аксессуаров
							для них и экипировки
						</p>

						<p>
							Мы знаем цену качеству. Поэтому в World-Bike только
							качественные премиальные товары по соответствующим
							ценам. А под заказ мы соберём для вас кастомный
							велосипед с уникальным дизайном и техническими
							характеристиками!
						</p>
					</div>
				</div>
			</div>
			<div className={styles.AboutUsBest__image}>
				<img src="/images/AboutUs/best.jpg" alt="" />
			</div>

			<div className="container">
				<div className={styles.AboutUsBest__footer}>
					<h6>Мы — официальные дилеры лучших брендов:</h6>
					<ul className={`list-reset ${styles.AboutUsBest__list}`}>
						<BestCard />
						<BestCard />
					</ul>
				</div>
			</div>
		</section>
	)
}

export default AboutUsBest
