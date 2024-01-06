import React from 'react'

import Ticker from '@components/Ticker/Ticker';
import TickerItem from '@components/TickerItem/TickerItem';

import styles from './AboutUsGallery.module.scss'

interface AboutUsGalleryProps {}

const AboutUsGallery:React.FC<AboutUsGalleryProps> = (props) => {
	const {} = props;
	return (
		<section className={styles.AboutUsGallery}>
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
