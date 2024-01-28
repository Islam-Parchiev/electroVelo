import React from 'react'

import AboutUsSubtitle from '@components/AboutUsSubtitle/AboutUsSubtitle'

import styles from './AboutUsTeam.module.scss'

const AboutUsTeam: React.FC = () => {
	return (
		<section className={styles.AboutUsTeam}>
			<div className="container">
				<div className={styles.AboutUsTeam__inner}>
					<AboutUsSubtitle variant="black">
						WORLD-BIKE – ЭТО В ПЕРВУЮ ОЧЕРЕДЬ КОМАНДА!
					</AboutUsSubtitle>
					<div className={styles.AboutUsTeam__content}>
						<div className={styles.AboutUsTeam__text}>
							<p className={styles.AboutUsTeam__descr}>
								Все наши сотрудники — это бывшие профессиональные
								велосипедисты, чемпионы и призёры соревнований
								Европы и России, участники отечественной сборной.
								Не сомневайтесь, если кто-то и способен
								предоставить вам по-настоящему профессиональную
								консультацию, то это они.
							</p>
							<div className={styles.AboutUsTeam__help}>
								<span>
									Консультанты World-Bike помогут вам в любом
									вопросе:
								</span>
								<ul
									className={`list-reset ${styles.AboutUsTeam__list}`}>
									<li className={styles.AboutUsTeam__item}>
										подбор велосипеда под ваш рост, вес,
										стиль езды и цели покупки байка;
									</li>
									<li className={styles.AboutUsTeam__item}>
										подбор велосипеда под ваш рост, вес,
										стиль езды и цели покупки байка;
									</li>
									<li className={styles.AboutUsTeam__item}>
										подбор велосипеда под ваш рост, вес,
										стиль езды и цели покупки байка;
									</li>
								</ul>
							</div>
						</div>
						<div className={styles.AboutUsTeam__image}>
							<picture>
								<source 
									type="image/webp"
									srcSet="/images/AboutUs/team.webp"
									media="(max-width:1920px)"
								/>
								<img src="/images/AboutUs/team.png" alt="" />
			
							</picture>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutUsTeam
