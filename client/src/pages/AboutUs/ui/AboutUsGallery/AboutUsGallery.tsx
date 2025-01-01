import React from 'react'


import AboutUsSubtitle from '@pages/AboutUs/ui/AboutUsSubtitle/AboutUsSubtitle';

import { TickerItem } from '../../../../shared/ui';

import Ticker from './../../../../widgets/Ticker/Ticker';

import styles from './AboutUsGallery.module.scss'

const AboutUsGallery: React.FC = () => {
	return (
		<section className={styles.AboutUsGallery}>
			<div className="container">
				<AboutUsSubtitle variant="black">Фотогалерея</AboutUsSubtitle>
			</div>
			<Ticker>
				<TickerItem anotherClass={styles.AboutUsGallery__item}>
					<picture>
						<source
							type="image/webp"
							srcSet="/images/AboutUs/gallery1.webp"
							media="(max-width:1920px)"
						/>
						<img src="/images/AboutUs/gallery1.png" alt="" />

					</picture>
				</TickerItem>
				<TickerItem anotherClass={styles.AboutUsGallery__item}>
					<picture>
						<source
							type="image/webp"
							srcSet="/images/AboutUs/gallery1.webp"
							media="(max-width:1920px)"
						/>
						<img src="/images/AboutUs/gallery1.png" alt="" />

					</picture>
				</TickerItem>
				<TickerItem anotherClass={styles.AboutUsGallery__item}>
					<picture>
						<source
							type="image/webp"
							srcSet="/images/AboutUs/gallery1.webp"
							media="(max-width:1920px)"
						/>
						<img src="/images/AboutUs/gallery1.png" alt="" />

					</picture>
				</TickerItem>
				<TickerItem anotherClass={styles.AboutUsGallery__item}>
					<picture>
						<source
							type="image/webp"
							srcSet="/images/AboutUs/gallery1.webp"
							media="(max-width:1920px)"
						/>
						<img src="/images/AboutUs/gallery1.png" alt="" />

					</picture>
				</TickerItem>
				<TickerItem anotherClass={styles.AboutUsGallery__item}>
					<picture>
						<source
							type="image/webp"
							srcSet="/images/AboutUs/gallery1.webp"
							media="(max-width:1920px)"
						/>
						<img src="/images/AboutUs/gallery1.png" alt="" />

					</picture>
				</TickerItem>
				<TickerItem anotherClass={styles.AboutUsGallery__item}>
					<picture>
						<source
							type="image/webp"
							srcSet="/images/AboutUs/gallery1.webp"
							media="(max-width:1920px)"
						/>
						<img src="/images/AboutUs/gallery1.png" alt="" />

					</picture>
				</TickerItem>
				<TickerItem anotherClass={styles.AboutUsGallery__item}>
					<picture>
						<source
							type="image/webp"
							srcSet="/images/AboutUs/gallery1.webp"
							media="(max-width:1920px)"
						/>
						<img src="/images/AboutUs/gallery1.png" alt="" />

					</picture>
				</TickerItem>
				<TickerItem anotherClass={styles.AboutUsGallery__item}>
					<picture>
						<source
							type="image/webp"
							srcSet="/images/AboutUs/gallery1.webp"
							media="(max-width:1920px)"
						/>
						<img src="/images/AboutUs/gallery1.png" alt="" />

					</picture>
				</TickerItem>
				<TickerItem anotherClass={styles.AboutUsGallery__item}>
					<picture>
						<source
							type="image/webp"
							srcSet="/images/AboutUs/gallery1.webp"
							media="(max-width:1920px)"
						/>
						<img src="/images/AboutUs/gallery1.png" alt="" />

					</picture>
				</TickerItem>
				<TickerItem anotherClass={styles.AboutUsGallery__item}>
					<picture>
						<source
							type="image/webp"
							srcSet="/images/AboutUs/gallery1.webp"
							media="(max-width:1920px)"
						/>
						<img src="/images/AboutUs/gallery1.png" alt="" />

					</picture>
				</TickerItem>
				<TickerItem anotherClass={styles.AboutUsGallery__item}>
					<picture>
						<source
							type="image/webp"
							srcSet="/images/AboutUs/gallery1.webp"
							media="(max-width:1920px)"
						/>
						<img src="/images/AboutUs/gallery1.png" alt="" />

					</picture>
				</TickerItem>
				<TickerItem anotherClass={styles.AboutUsGallery__item}>
					<picture>
						<source
							type="image/webp"
							srcSet="/images/AboutUs/gallery1.webp"
							media="(max-width:1920px)"
						/>
						<img src="/images/AboutUs/gallery1.png" alt="" />

					</picture>
				</TickerItem>
				<TickerItem anotherClass={styles.AboutUsGallery__item}>
					<picture>
						<source
							type="image/webp"
							srcSet="/images/AboutUs/gallery1.webp"
							media="(max-width:1920px)"
						/>
						<img src="/images/AboutUs/gallery1.png" alt="" />

					</picture>
				</TickerItem>
			</Ticker>
		</section>
	)
}

export default AboutUsGallery
