import React from 'react'

import styles from './MountainBikes.module.scss'

interface MountainBikesProps {}

const MountainBikes: React.FC<MountainBikesProps> = props => {
	const {} = props
	return (
		<section className={styles.MountainBikes}>
			<div className={`container ${styles.MountainBikes__container}`}>
				<h2 className="title">Горные велосипеды</h2>
				<div className={styles.MountainBikes__body}>
					<ul className={`list-reset ${styles.MountainBikes__list}`}>
						<li className={styles.MountainBikesItem}>
							<div className={styles.MountainBikesItem__top}>
								<h4 className={styles.MountainBikesItem__title}>
									Рама
								</h4>
								<img
									src="/images/Main/mountain1.svg"
									alt="Icon"
								/>
							</div>
							<div className={styles.MountainBikesItem__descr}>
								<p>
									It is a long established fact that a reader
									will be distracted by the readable content of
								</p>
							</div>
						</li>
						<li className={styles.MountainBikesItem}>
							<div className={styles.MountainBikesItem__top}>
								<h4 className={styles.MountainBikesItem__title}>
									Рама
								</h4>
								<img
									src="/images/Main/mountain1.svg"
									alt="Icon"
								/>
							</div>
							<div className={styles.MountainBikesItem__descr}>
								<p>
									It is a long established fact that a reader
									will be distracted by the readable content of
								</p>
							</div>
						</li>
						<li className={styles.MountainBikesItem}>
							<div className={styles.MountainBikesItem__top}>
								<h4 className={styles.MountainBikesItem__title}>
									Рама
								</h4>
								<img
									src="/images/Main/mountain1.svg"
									alt="Icon"
								/>
							</div>
							<div className={styles.MountainBikesItem__descr}>
								<p>
									It is a long established fact that a reader
									will be distracted by the readable content of
								</p>
							</div>
						</li>
						<li className={styles.MountainBikesItem}>
							<div className={styles.MountainBikesItem__top}>
								<h4 className={styles.MountainBikesItem__title}>
									Рама
								</h4>
								<img
									src="/images/Main/mountain1.svg"
									alt="Icon"
								/>
							</div>
							<div className={styles.MountainBikesItem__descr}>
								<p>
									It is a long established fact that a reader
									will be distracted by the readable content of
								</p>
							</div>
						</li>
					</ul>
					<div className={styles.MountainBikes__right}>
						<div className={styles.MountainBikes__img}>
							<img src="/images/Main/mountainImage.png" alt="" />
						</div>
						<div className={styles.MountainBikes__descr}>
							<p>
							Горный велосипед несмотря на свое название часто и активно 
							используются в условиях города, так как обладает рядом 
							характеристик, позволяющих сделать велопрогулку максимально 
							приятной и комфортной
							</p>
						</div>
						<button className={`btn-reset btn ${styles.MountainBikes__btn}`}>Каталог</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MountainBikes
