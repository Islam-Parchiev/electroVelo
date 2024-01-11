import React from 'react'

import { Link } from 'react-router-dom'

import styles from './ReviewsItem.module.scss'

interface ReviewsItemProps {
	id: number
	imageUrl: string
	date: string
	dateTime: string
	text: string
	tag: {
		text: string
		url: string
	}
}

const ReviewsItem: React.FC<ReviewsItemProps> = props => {
	const { id, imageUrl, date, dateTime, text, tag } = props
	return (
		<li className={styles.ReviewsItem}>
			<div className={styles.ReviewsItem__img}>
				<img src={imageUrl} alt="Review" />
			</div>
			<div className={styles.ReviewsItem__bottom}>
				<div className={styles.ReviewsItem__info}>
					<time dateTime={dateTime}>{date}</time>
					<a href={tag.url} className={styles.ReviewsItem__tag}>
						{tag.text}
					</a>
					<span className={styles.ReviewsItem__text}>{text}</span>
				</div>

				<Link to={`/blog/${id}`} className={styles.ReviewsItem__more}>
					Подробнее
				</Link>
			</div>
		</li>
	)
}

export default ReviewsItem
