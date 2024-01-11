import React from 'react'

import ReviewsItem from '@components/ReviewsItem/ReviewsItem'

import styles from './Reviews.module.scss'

const Reviews: React.FC = () => {
	const tag = {
		text: '#обзор',
		url: '/',
	}

	return (
		<section className={styles.Reviews}>
			<div className={`container ${styles.Reviews__container}`}>
				<h2 className="title">Последние обзоры</h2>
				<ul className={`list-reset ${styles.Reviews__list}`}>
					<ReviewsItem
						id={1}
						imageUrl="/images/Reviews/1.jpg"
						dateTime="2023-1-25"
						date="18 ноября 2015"
						tag={tag}
						text="BMC Kaius 01 идеальный гоночный гравийный велосипед"
					/>
					<ReviewsItem
						id={2}
						imageUrl="/images/Reviews/1.jpg"
						dateTime="2023-1-25"
						date="18 ноября 2015"
						tag={tag}
						text="BMC Kaius 01 идеальный гоночный гравийный велосипед"
					/>
					<ReviewsItem
						id={3}
						imageUrl="/images/Reviews/1.jpg"
						dateTime="2023-1-25"
						date="18 ноября 2015"
						tag={tag}
						text="BMC Kaius 01 идеальный гоночный гравийный велосипед"
					/>
				</ul>
			</div>
		</section>
	)
}

export default Reviews
