import React from 'react'

import { CheckboxRadio } from '../../shared/ui'

import styles from './OrderDelivery.module.scss'

const OrderDelivery: React.FC = () => {
	return (
		<div className={styles.OrderDelivery}>
			<h2 className={styles.OrderDelivery__title}>2 Детали доставки</h2>
			<div className={styles.OrderDelivery__inner}>
				<div className={styles.DeliveryMethod}>
					<h4 className={styles.DeliveryMethod__title}>Способ доставки</h4>
					<ul className={`list-reset ${styles.DeliveryMethod__list}`}>
						<li className={styles.DeliveryMethod__item}>
							<CheckboxRadio
								radioName="delivery-variant"
								radioValue="delivery-one"
								checked={true}
								title="Курьерская доставка"
							/>
						</li>
						<li className={styles.DeliveryMethod__item}>
							<CheckboxRadio
								radioName="delivery-variant"
								radioValue="delivery-two"
								title="Самовывоз"
							/>
						</li>
					</ul>
				</div>
				<div className={styles.DeliveryMethod}>
					<h4 className={styles.DeliveryMethod__title}>Способ оплаты</h4>
					<ul className={`list-reset ${styles.DeliveryMethod__list}`}>
						<li className={styles.DeliveryMethod__item}>
							<CheckboxRadio
								radioName="payment-variant"
								radioValue="payment-one"
								title="Оплата онлайн, на сайте"
							/>
						</li>
						<li className={styles.DeliveryMethod__item}>
							<CheckboxRadio
								radioName="payment-variant"
								radioValue="payment-two"
								title="Оплата курьеру картой"
							/>
						</li>
						<li className={styles.DeliveryMethod__item}>
							<CheckboxRadio
								radioName="payment-variant"
								radioValue="payment-three"
								title="Оплата курьеру наличными"
							/>
						</li>
						<li className={styles.DeliveryMethod__item}>
							<CheckboxRadio
								radioName="payment-variant"
								radioValue="payment-four"
								title="Оплата в магазине"
							/>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default OrderDelivery
