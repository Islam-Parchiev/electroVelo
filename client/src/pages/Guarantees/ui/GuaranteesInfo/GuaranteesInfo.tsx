import React from 'react'

import GuaranteesInfoItem from '@pages/Guarantees/ui/GuaranteesInfoItem/GuaranteesInfoItem'

import styles from './GuaranteesInfo.module.scss'

const GuaranteesInfo: React.FC = () => {
	return (
		<section className={styles.GuaranteesInfo}>
			<div className="container">
				<h2 className={styles.GuaranteesInfo__title}>Гарантия на бренды</h2>
				<div className={styles.GuaranteesInfo__inner}>
					<div className={styles.GuaranteesInfo__column}>
						<ul className={`list-reset ${styles.GuaranteesInfo__list}`}>
							<GuaranteesInfoItem title="BMC">
								2 года гарантия +1 год при регистрации на сайте
							</GuaranteesInfoItem>
							<GuaranteesInfoItem title="BMC">
								2 года гарантия +1 год при регистрации на сайте
							</GuaranteesInfoItem>
							<GuaranteesInfoItem title="BMC">
								2 года гарантия +1 год при регистрации на сайте
							</GuaranteesInfoItem>
							<GuaranteesInfoItem title="BMC">
								2 года гарантия +1 год при регистрации на сайте
							</GuaranteesInfoItem>
						</ul>
					</div>
					<div className={styles.GuaranteesInfo__column}>
						<ul className={`list-reset ${styles.GuaranteesInfo__list}`}>
							<GuaranteesInfoItem title="BMC">
								2 года гарантия +1 год при регистрации на сайте
							</GuaranteesInfoItem>
							<GuaranteesInfoItem title="BMC">
								2 года гарантия +1 год при регистрации на сайте
							</GuaranteesInfoItem>
							<GuaranteesInfoItem title="BMC">
								2 года гарантия +1 год при регистрации на сайте
							</GuaranteesInfoItem>
							<GuaranteesInfoItem title="BMC">
								2 года гарантия +1 год при регистрации на сайте
							</GuaranteesInfoItem>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default GuaranteesInfo
