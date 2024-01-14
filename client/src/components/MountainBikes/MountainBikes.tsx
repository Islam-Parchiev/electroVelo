import React from 'react'

import Button from '@components/Button/Button'
import MountainBikesItem from '@components/MountainBikesItem/MountainBikesItem'

import styles from './MountainBikes.module.scss'

const MountainBikes: React.FC = () => {
	return (
		<section className={styles.MountainBikes}>
			<div className="container">
				<div className={styles.MountainBikes__inner}>
					<h2 className="title">Горные велосипеды</h2>
					<div className={styles.MountainBikes__body}>
						<ul className={`list-reset ${styles.MountainBikes__list}`}>
							<MountainBikesItem
								imageUrl="/images/Main/mountain1.svg"
								title="Рама"
								description="It is a long established fact that a reader will be distracted by the readable content of"
							/>
							<MountainBikesItem
								imageUrl="/images/Main/mountain1.svg"
								title="Рама"
								description="It is a long established fact that a reader will be distracted by the readable content of"
							/>
							<MountainBikesItem
								imageUrl="/images/Main/mountain1.svg"
								title="Рама"
								description="It is a long established fact that a reader will be distracted by the readable content of"
							/>
							<MountainBikesItem
								imageUrl="/images/Main/mountain1.svg"
								title="Рама"
								description="It is a long established fact that a reader will be distracted by the readable content of"
							/>
						</ul>
						<div className={styles.MountainBikes__right}>
							<div className={styles.MountainBikes__img}>
								<img
									src="/images/Main/mountainImage.png"
									alt=""
								/>
							</div>
							<div className={styles.MountainBikes__descr}>
								<p>
									Горный велосипед несмотря на свое название
									часто и активно используются в условиях
									города, так как обладает рядом характеристик,
									позволяющих сделать велопрогулку максимально
									приятной и комфортной
								</p>
							</div>
							<Button otherClass={styles.MountainBikes__btn}>
								Каталог
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MountainBikes
