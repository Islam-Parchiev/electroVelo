import React from 'react'

import Ticker from '@components/Ticker/Ticker'
import TickerItem from '@components/TickerItem/TickerItem'

import styles from './Brands.module.scss'

const Brands: React.FC = () => {
	return (
		<section className={styles.Brands}>
			<Ticker>
				<TickerItem>
					<img src="/images/ticker/1.png" alt="" />
				</TickerItem>
				<TickerItem>
					<img src="/images/ticker/2.png" alt="" />
				</TickerItem>
				<TickerItem>
					<img src="/images/ticker/3.png" alt="" />
				</TickerItem>
				<TickerItem>
					<img src="/images/ticker/4.png" alt="" />
				</TickerItem>
				<TickerItem>
					<img src="/images/ticker/5.png" alt="" />
				</TickerItem>
				<TickerItem>
					<img src="/images/ticker/6.png" alt="" />
				</TickerItem>
				<TickerItem>
					<img src="/images/ticker/7.png" alt="" />
				</TickerItem>
				<TickerItem>
					<img src="/images/ticker/1.png" alt="" />
				</TickerItem>
				<TickerItem>
					<img src="/images/ticker/2.png" alt="" />
				</TickerItem>
				<TickerItem>
					<img src="/images/ticker/3.png" alt="" />
				</TickerItem>
				<TickerItem>
					<img src="/images/ticker/4.png" alt="" />
				</TickerItem>
				<TickerItem>
					<img src="/images/ticker/5.png" alt="" />
				</TickerItem>
				<TickerItem>
					<img src="/images/ticker/6.png" alt="" />
				</TickerItem>
				<TickerItem>
					<img src="/images/ticker/7.png" alt="" />
				</TickerItem>
			</Ticker>
		</section>
	)
}

export default Brands
