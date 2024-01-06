import React from 'react'

import AboutUsSubtitle from '@components/AboutUsSubtitle/AboutUsSubtitle';

import styles from './AboutUsQuestions.module.scss'

interface AboutUsQuestionsProps {}

const AboutUsQuestions:React.FC<AboutUsQuestionsProps> = (props) => {
	const {} = props;
	return (
		<section className={styles.AboutUsQuestions}>
			<div className="container">
				<div className={styles.AboutUsQuestions__inner}>
					<AboutUsSubtitle variant="light">Остались вопросы?</AboutUsSubtitle>
					<span>Позвоните нам по номеру</span>
					<a href="/">+7 (495) 055-75-86</a>
					<p>Мы к вашим услугам! И, конечно же, приходите в наш магазин, 
						чтобы посмотреть товары вживую, лично оценить качество
						 и сделать правильный выбор!</p>
				</div>
			</div>
		</section>
	)
}

export default AboutUsQuestions
