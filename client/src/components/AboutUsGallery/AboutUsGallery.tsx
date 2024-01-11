import React from 'react'

import Ticker from '@components/Ticker/Ticker';
import TickerItem from '@components/TickerItem/TickerItem';
import AboutUsSubtitle from '@components/AboutUsSubtitle/AboutUsSubtitle';

import styles from './AboutUsGallery.module.scss'

const AboutUsGallery:React.FC = () => {
	return (
		<section className={styles.AboutUsGallery}>
			<div className="container">
				<AboutUsSubtitle variant="black">Фотогалерея</AboutUsSubtitle>
			</div>
			<Ticker>
				<TickerItem anotherClass={styles.AboutUsGallery__item}>
					<img src="/images/AboutUs/gallery1.png" alt="" />
				</TickerItem>
				<TickerItem anotherClass={styles.AboutUsGallery__item}>
					<img src="/images/AboutUs/gallery1.png" alt="" />
				</TickerItem>
				<TickerItem anotherClass={styles.AboutUsGallery__item}>
					<img src="/images/AboutUs/gallery1.png" alt="" />
				</TickerItem>
				<TickerItem anotherClass={styles.AboutUsGallery__item}>
					<img src="/images/AboutUs/gallery1.png" alt="" />
				</TickerItem>
				<TickerItem anotherClass={styles.AboutUsGallery__item}>
					<img src="/images/AboutUs/gallery1.png" alt="" />
				</TickerItem>
				<TickerItem anotherClass={styles.AboutUsGallery__item}>
					<img src="/images/AboutUs/gallery1.png" alt="" />
				</TickerItem>
				<TickerItem anotherClass={styles.AboutUsGallery__item}>
					<img src="/images/AboutUs/gallery1.png" alt="" />
				</TickerItem>
				<TickerItem anotherClass={styles.AboutUsGallery__item}>
					<img src="/images/AboutUs/gallery1.png" alt="" />
				</TickerItem>
				<TickerItem anotherClass={styles.AboutUsGallery__item}>
					<img src="/images/AboutUs/gallery1.png" alt="" />
				</TickerItem>
				<TickerItem anotherClass={styles.AboutUsGallery__item}>
					<img src="/images/AboutUs/gallery1.png" alt="" />
				</TickerItem>
				<TickerItem anotherClass={styles.AboutUsGallery__item}>
					<img src="/images/AboutUs/gallery1.png" alt="" />
				</TickerItem>
				<TickerItem anotherClass={styles.AboutUsGallery__item}>
					<img src="/images/AboutUs/gallery1.png" alt="" />
				</TickerItem>
				<TickerItem anotherClass={styles.AboutUsGallery__item}>
					<img src="/images/AboutUs/gallery1.png" alt="" />
				</TickerItem>
			</Ticker>
		</section>
	)
}

export default AboutUsGallery
