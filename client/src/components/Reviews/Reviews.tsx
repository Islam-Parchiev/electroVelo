import React from 'react'

import styles from './Reviews.module.scss'

interface ReviewsProps {}

const Reviews:React.FC<ReviewsProps> = (props) => {
	const {} = props;
	return (
		<section className={styles.Reviews}>
			<div className={`container ${styles.Reviews__container}`}>
       	 <h2 className="title">
					Последние обзоры
				</h2>
				<ul className={`list-reset ${styles.Reviews__list}`}>
					<li className={styles.ReviewsItem}>
						<div className={styles.ReviewsItem__img}>
							<img src="/images/Reviews/1.jpg" alt="Review" />
						</div>
          	<div className={styles.ReviewsItem__bottom}>
            	<div className={styles.ReviewsItem__info}>
								<time dateTime="2023-1-25">18 ноября 2015</time>
								<a href="/" className={styles.ReviewsItem__tag}>#обзор</a>
								<span className={styles.ReviewsItem__text}>
								BMC Kaius 01 идеальный гоночный гравийный велосипед
								</span>
							</div>
						
							<a href="/" className={styles.ReviewsItem__more}>Подробнее</a>
						
						 </div>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default Reviews
