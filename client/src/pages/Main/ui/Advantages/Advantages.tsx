import React from 'react'

import AdvantagesItem from '@pages/Main/ui/Advantages/AdvantagesItem/AdvantagesItem'

import styles from './Advantages.module.scss'

const Advantages: React.FC = () => {
	return (
		<section className={styles.Advantages}>
			<div className="container">
				<h2 className={`title ${styles.Advantages__title}`}>Преимущества</h2>
			</div>
			<div className={styles.Advantages__body}>
				<div className={styles.Advantages__img}>
					<picture>
						<source
							type="image/avif"
							srcSet="/images/Main/advantages1.avif"
							media="(max-width:1920px)"
						/>
						<source
							type="image/webp"
							srcSet="/images/Main/advantages1.webp"
							media="(max-width:1920px)"
						/>

						<img src="/images/Main/advantages1.jpg" alt="cyclist" loading="lazy" />

					</picture>
				</div>
				<ul className={`list-reset ${styles.Advantages__list}`}>
					<AdvantagesItem title="БЕСПЛАТНАЯ ДОСТАВКА" description="Мы пользуемся всеми популярными видами доставки" url="https://www.google.com/" />
					<AdvantagesItem title="ОБМЕН И ВОЗВРАТ" description="Все товары обеспечены фирменной гарантией фирм-производителей" url="#" />
					<AdvantagesItem title="ДОП. ОБСЛУЖИВАНИЕ" description="Мы выполняем ремонт велосипеда любой сложности" url="#" />
					<AdvantagesItem title="ОНЛАЙН ОПЛАТА" description="Для удобства вы можете оплатить товар банковской картой через сайт" url="#" />
				</ul>
				<div className={styles.Advantages__img}>
					<picture>
						<source
							type="image/avif"
							srcSet="/images/Main/advantages2.avif"
							media="(max-width:1920px)"
						/>
						<source
							type="image/webp"
							srcSet="/images/Main/advantages2.webp"
							media="(max-width:1920px)"
						/>

						<img src="/images/Main/advantages2.jpg" alt="" loading="lazy" />

					</picture>
				</div>
			</div>
		</section>
	)
}

export default Advantages
