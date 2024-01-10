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
							imageUrl="/images/Reviews/1.jpg"
							dateTime="2023-1-25"
							date="18 ноября 2015"
							tag={tag}
							text="BMC Kaius 01 идеальный гоночный гравийный велосипед"
							url="/"
						/>
						<ReviewsItem
							imageUrl="/images/Reviews/1.jpg"
							dateTime="2023-1-25"
							date="18 ноября 2015"
							tag={tag}
							text="BMC Kaius 01 идеальный гоночный гравийный велосипед"
							url="/"
						/>
						<ReviewsItem
							imageUrl="/images/Reviews/1.jpg"
							dateTime="2023-1-25"
							date="18 ноября 2015"
							tag={tag}
							text="BMC Kaius 01 идеальный гоночный гравийный велосипед"
							url="/"
						/>
						<ReviewsItem
							imageUrl="/images/Reviews/1.jpg"
							dateTime="2023-1-25"
							date="18 ноября 2015"
							tag={tag}
							text="BMC Kaius 01 идеальный гоночный гравийный велосипед"
							url="/"
						/>
						<ReviewsItem
							imageUrl="/images/Reviews/1.jpg"
							dateTime="2023-1-25"
							date="18 ноября 2015"
							tag={tag}
							text="BMC Kaius 01 идеальный гоночный гравийный велосипед"
							url="/"
						/>
						<ReviewsItem
							imageUrl="/images/Reviews/1.jpg"
							dateTime="2023-1-25"
							date="18 ноября 2015"
							tag={tag}
							text="BMC Kaius 01 идеальный гоночный гравийный велосипед"
							url="/"
						/>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default BlogContent
