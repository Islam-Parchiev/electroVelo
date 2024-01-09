import React from 'react'

import styles from './GuaranteesInfo.module.scss'

interface GuaranteesInfoProps {}

const GuaranteesInfo:React.FC<GuaranteesInfoProps> = (props) => {
	const {} = props;
	return (
		<section className={styles.GuaranteesInfo}>

			<div className="container">
				<h2 className={styles.GuaranteesInfo__title}>
				Гарантия на бренды
				</h2>
				<div className={styles.GuaranteesInfo__inner}>
					<div className={styles.GuaranteesInfo__column}>
						<ul className={`list-reset ${styles.GuaranteesInfo__list}`}>
							<li className={styles.GuaranteesInfo__item}>
								<span className={styles.GuaranteesInfo__item_title}>
								BMC
								</span>
								<span className={styles.GuaranteesInfo__item_price}>
								2 года гарантия +1 год при регистрации на сайте
								</span>
							</li>
							<li className={styles.GuaranteesInfo__item}>
								<span className={styles.GuaranteesInfo__item_title}>
								BMC
								</span>
								<span className={styles.GuaranteesInfo__item_price}>
								2 года гарантия +1 год при регистрации на сайте
								</span>
							</li>
							<li className={styles.GuaranteesInfo__item}>
								<span className={styles.GuaranteesInfo__item_title}>
								BMC
								</span>
								<span className={styles.GuaranteesInfo__item_price}>
								2 года гарантия +1 год при регистрации на сайте
								</span>
							</li>
							<li className={styles.GuaranteesInfo__item}>
								<span className={styles.GuaranteesInfo__item_title}>
								BMC
								</span>
								<span className={styles.GuaranteesInfo__item_price}>
								2 года гарантия +1 год при регистрации на сайте
								</span>
							</li>

						</ul>
					</div>
					<div className={styles.GuaranteesInfo__column}>
						<ul className={`list-reset ${styles.GuaranteesInfo__list}`}>
							<li className={styles.GuaranteesInfo__item}>
								<span className={styles.GuaranteesInfo__item_title}>
								BMC
								</span>
								<span className={styles.GuaranteesInfo__item_price}>
								2 года гарантия +1 год при регистрации на сайте
								</span>
							</li>
							<li className={styles.GuaranteesInfo__item}>
								<span className={styles.GuaranteesInfo__item_title}>
								BMC
								</span>
								<span className={styles.GuaranteesInfo__item_price}>
								2 года гарантия +1 год при регистрации на сайте
								</span>
							</li>
							<li className={styles.GuaranteesInfo__item}>
								<span className={styles.GuaranteesInfo__item_title}>
								BMC
								</span>
								<span className={styles.GuaranteesInfo__item_price}>
								2 года гарантия +1 год при регистрации на сайте
								</span>
							</li>
							<li className={styles.GuaranteesInfo__item}>
								<span className={styles.GuaranteesInfo__item_title}>
								BMC
								</span>
								<span className={styles.GuaranteesInfo__item_price}>
								2 года гарантия +1 год при регистрации на сайте
								</span>
							</li>
							
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default GuaranteesInfo
