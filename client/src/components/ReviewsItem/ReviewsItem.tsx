import React from 'react'

import styles from './ReviewsItem.module.scss'

interface ReviewsItemProps {
	imageUrl:string;
	date:string;
	dateTime:string;
	text:string;
	url:string;
	tag:{
    text: string;
    url: string;
};
}

const ReviewsItem: React.FC<ReviewsItemProps> = props => {
	const {
		imageUrl,
		date,
		dateTime,
		text,
		url,
		tag,
	} = props
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
					<span className={styles.ReviewsItem__text}>
						{text}
					</span>
				</div>

				<a href={url} className={styles.ReviewsItem__more}>
					Подробнее
				</a>
			</div>
		</li>
	)
}

export default ReviewsItem
