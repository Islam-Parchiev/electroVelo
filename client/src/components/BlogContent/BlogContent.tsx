import React from 'react'

import ReviewsItem from '@components/ReviewsItem/ReviewsItem'

import styles from './BlogContent.module.scss'

const BlogContent: React.FC = () => {
	const tag = {
		text: '#обзор',
		url: '/',
	}
	return (
		<section className={styles.BlogContent}>
			<div className="container">
				<div className={styles.BlogContent__inner}>
					<ul className={`list-reset ${styles.BlogContent__list}`}>
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
						<ReviewsItem
							id={4}
							imageUrl="/images/Reviews/1.jpg"
							dateTime="2023-1-25"
							date="18 ноября 2015"
							tag={tag}
							text="BMC Kaius 01 идеальный гоночный гравийный велосипед"
						/>
						<ReviewsItem
							id={5}
							imageUrl="/images/Reviews/1.jpg"
							dateTime="2023-1-25"
							date="18 ноября 2015"
							tag={tag}
							text="BMC Kaius 01 идеальный гоночный гравийный велосипед"
						/>
						<ReviewsItem
							id={6}
							imageUrl="/images/Reviews/1.jpg"
							dateTime="2023-1-25"
							date="18 ноября 2015"
							tag={tag}
							text="BMC Kaius 01 идеальный гоночный гравийный велосипед"
						/>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default BlogContent
