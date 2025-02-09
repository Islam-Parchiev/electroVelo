import React from 'react'

import OrderItem from '@pages/Profile/ui/OrdersHistory/Order/OrderItem/OrderItem'

import styles from './Order.module.scss'

interface OrderProps {
	date: string
	orderNumber: number
	orderPrice: number
	orderStatus: string
}
const Order: React.FC<OrderProps> = props => {
	const { date, orderNumber, orderPrice, orderStatus } = props
	const [active, setActive] = React.useState(false)
	return (
		<div className={styles.Order}>
			<div className={`${styles.Order__header} ${active ? styles.active : ''} `}>
				<time dateTime="2023-01-22T19:00">{date}</time>
				<span className={styles.Order__number}>{orderNumber}</span>
				<span className={styles.Order__sum}>{orderPrice} ₽</span>
				<span className={styles.Order__status}>{orderStatus}</span>
				<button
					className={`btn-reset ${styles.Order__btn}`}
					onClick={() => setActive(!active)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="17"
						height="10"
						viewBox="0 0 17 10"
						fill="none">
						<g clipPath="url(#clip0_2128_4303)">
							<path
								d="M15.046 7.46429L9.09596 1.44643C9.02513 1.375 8.94839 1.32452 8.86576 1.295C8.78312 1.265 8.69457
											 1.25 8.60013 1.25C8.50569 1.25 8.41714 1.265 8.33451 1.295C8.25187 1.32452 8.17513 1.375 8.1043 
											 1.44643L2.13659 7.46429C1.97131 7.63095 1.88867 7.83929 1.88867 8.08929C1.88867 8.33929 1.97721
											  8.55357 2.1543 8.73214C2.33138 8.91071 2.53798 9 2.77409 9C3.0102 9 3.2168 8.91071 3.39388 
												8.73214L8.60013 3.48214L13.8064 8.73214C13.9717 8.89881 14.1752 8.98214 14.417 8.98214C14.6592 
												8.98214 14.8689 8.89286 15.046 8.71429C15.223 8.53571 15.3116 8.32738 15.3116 8.08929C15.3116 
												7.85119 15.223 7.64286 15.046 7.46429Z"
								fill="#F57520"
							/>
						</g>
						<defs>
							<clipPath id="clip0_2128_4303">
								<rect
									width="10"
									height="17"
									fill="white"
									transform="matrix(-4.37114e-08 1 1 4.37114e-08 0 0)"
								/>
							</clipPath>
						</defs>
					</svg>
				</button>
			</div>
			<div className={`${styles.Order__body} ${active ? styles.active : ''}`}>
				<ul className={styles.Order__list}>
					<OrderItem
						imageUrl="pre1.1.png"
						title="Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018"
						price={435000}
						prevPrice={522000}
					/>
					<OrderItem
						imageUrl="pre1.1.png"
						title="Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018"
						price={435000}
						prevPrice={522000}
					/>
					<OrderItem
						imageUrl="pre1.1.png"
						title="Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018"
						price={435000}
						prevPrice={522000}
					/>
				</ul>
			</div>
		</div>
	)
}

export default Order
