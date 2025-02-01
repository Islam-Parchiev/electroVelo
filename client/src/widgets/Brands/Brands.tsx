import React from 'react'

import Ticker from '../Ticker/Ticker'

import { TickerItem } from '../../shared/ui'

import styles from './Brands.module.scss'

const Brands: React.FC = () => {
	return (
		<section className={styles.Brands}>
			<h2 className="visually-hidden">Бренды,Brands,Партнеры</h2>
			<Ticker>
				<TickerItem>
					<picture>
						<source
							type="image/webp"
							srcSet="/images/Ticker/1.webp"
							media="(max-width:1920px)"
						/>
						<img src="/images/ticker/1.png" alt="" />

					</picture>

				</TickerItem>
				<TickerItem>
					<picture>
						<source
							type="image/webp"
							srcSet="/images/Ticker/2.webp"
							media="(max-width:1920px)"
						/>
						<img src="/images/ticker/2.png" alt="" />

					</picture>
				</TickerItem>
				<TickerItem>
					<picture>
						<source
							type="image/webp"
							srcSet="/images/Ticker/3.webp"
							media="(max-width:1920px)"
						/>
						<img src="/images/ticker/3.png" alt="" />

					</picture>
				</TickerItem>
				<TickerItem>
					<picture>
						<source
							type="image/webp"
							srcSet="/images/Ticker/4.webp"
							media="(max-width:1920px)"
						/>
						<img src="/images/ticker/4.png" alt="" />

					</picture>
				</TickerItem>
				<TickerItem>
					<picture>
						<source
							type="image/webp"
							srcSet="/images/Ticker/5.webp"
							media="(max-width:1920px)"
						/>
						<img src="/images/ticker/5.png" alt="" />

					</picture>
				</TickerItem>
				<TickerItem>
					<picture>
						<source
							type="image/webp"
							srcSet="/images/Ticker/6.webp"
							media="(max-width:1920px)"
						/>
						<img src="/images/ticker/6.png" alt="" />

					</picture>
				</TickerItem>
				<TickerItem>
					<picture>
						<source
							type="image/webp"
							srcSet="/images/Ticker/7.webp"
							media="(max-width:1920px)"
						/>
						<img src="/images/ticker/7.png" alt="" />

					</picture>
				</TickerItem>
				<TickerItem>
					<picture>
						<source
							type="image/webp"
							srcSet="/images/Ticker/1.webp"
							media="(max-width:1920px)"
						/>
						<img src="/images/ticker/1.png" alt="" />

					</picture>
				</TickerItem>
				<TickerItem>
					<picture>
						<source
							type="image/webp"
							srcSet="/images/Ticker/2.webp"
							media="(max-width:1920px)"
						/>
						<img src="/images/ticker/2.png" alt="" />

					</picture>
				</TickerItem>
				<TickerItem>
					<picture>
						<source
							type="image/webp"
							srcSet="/images/Ticker/3.webp"
							media="(max-width:1920px)"
						/>
						<img src="/images/ticker/3.png" alt="" />

					</picture>
				</TickerItem>
				<TickerItem>
					<picture>
						<source
							type="image/webp"
							srcSet="/images/Ticker/4.webp"
							media="(max-width:1920px)"
						/>
						<img src="/images/ticker/4.png" alt="" />

					</picture>
				</TickerItem>
				<TickerItem>
					<picture>
						<source
							type="image/webp"
							srcSet="/images/Ticker/5.webp"
							media="(max-width:1920px)"
						/>
						<img src="/images/ticker/5.png" alt="" />

					</picture>
				</TickerItem>
				<TickerItem>
					<picture>
						<source
							type="image/webp"
							srcSet="/images/Ticker/6.webp"
							media="(max-width:1920px)"
						/>
						<img src="/images/ticker/6.png" alt="" />

					</picture>
				</TickerItem>
				<TickerItem>
					<picture>
						<source
							type="image/webp"
							srcSet="/images/Ticker/7.webp"
							media="(max-width:1920px)"
						/>
						<img src="/images/ticker/7.png" alt="" />

					</picture>
				</TickerItem>
			</Ticker>
		</section>
	)
}

export default Brands
