import React from 'react'

import AboutUsSubtitle from '@components/AboutUsSubtitle/AboutUsSubtitle';

import styles from './AboutUsTeam.module.scss'

interface AboutUsTeamProps {}

const AboutUsTeam:React.FC<AboutUsTeamProps> = (props) => {
	const {} = props;
	return (
		<section className={styles.AboutUsTeam}>
			<div className="container">
				<div className={styles.AboutUsTeam__inner}>
					<AboutUsSubtitle variant="black">WORLD-BIKE – ЭТО В ПЕРВУЮ ОЧЕРЕДЬ КОМАНДА!</AboutUsSubtitle>
					<div className={styles.AboutUsTeam__content}>
						<div className={styles.AboutUsTeam__text}>
							<p className={styles.AboutUsTeam__descr}>
							Все наши сотрудники — это бывшие профессиональные велосипедисты, чемпионы и призёры
							 соревнований Европы и России, участники отечественной сборной. Не сомневайтесь, 
							 если кто-то и способен предоставить вам по-настоящему профессиональную консультацию, 
							 то это они.
							</p>
							<div className={styles.AboutUsTeam__help}>
								<span>Консультанты World-Bike помогут вам в любом вопросе:</span>
								<ul className={`list-reset ${styles.AboutUsTeam__list}`}>
									<li className={styles.AboutUsTeam__item}>
									подбор велосипеда под ваш рост, вес, стиль езды и цели покупки байка;
									</li>
									<li className={styles.AboutUsTeam__item}>
									подбор велосипеда под ваш рост, вес, стиль езды и цели покупки байка;
									</li>
									<li className={styles.AboutUsTeam__item}>
									подбор велосипеда под ваш рост, вес, стиль езды и цели покупки байка;
									</li>
								</ul>
							</div>
						</div>
						<div className={styles.AboutUsTeam__image}>
							<img src="/images/aboutus/team.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutUsTeam
