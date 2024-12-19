import React, { useState } from 'react'

import { Button, Modal } from '../../shared/ui'

import styles from './OrderFinish.module.scss'

const OrderFinish: React.FC = () => {
	const [open, setOpen] = useState(false)
	return (
		<div className={styles.OrderFinish}>
			{open && (
				<Modal handleOpen={setOpen} value={open}>
					<div className={styles.OrderFinish__modal}>
						<h3>Ваш заказ подтверждён</h3>
					</div>
				</Modal>
			)}
			<div className={styles.OrderFinish__column}>
				<h2 className={styles.OrderFinish__title}>3 Ваш заказ</h2>
			</div>
			<div
				className={`${styles.OrderFinish__column} ${styles.OrderFinish__info}`}>
				<span className={styles.OrderFinish__delivery}>
					Курьерская доставка
				</span>
				<ul className={`list-reset ${styles.OrderFinish__info_list}`}>
					<li className={styles.OrderFinish__info_item}>
						<span>Адрес:</span>
						<address>г. Москва, ул. Некрасова, д. 23, кв. 45</address>
					</li>
					<li className={styles.OrderFinish__info_item}>
						<span>Кому:</span>
						<span>Алёхин Борис</span>
					</li>
					<li className={styles.OrderFinish__info_item}>
						<span>Телефон:</span>
						<a href="/">8 999 999 99-99</a>
					</li>
					<li className={styles.OrderFinish__info_item}>
						<span>E-mail:</span>
						<a href="/">pochta@mail.ru</a>
					</li>
				</ul>
			</div>
			<div
				className={`${styles.OrderFinish__column} ${styles.OrderFinish__total}`}>
				<div className={styles.OrderFinish__total_top}>
					<span className={styles.OrderFinish__total_count}>
						Итого 3 товара
					</span>
					<span className={styles.OrderFinish__total_price}>
						605 370 ₽{' '}
					</span>
				</div>
				<div className={styles.OrderFinish__total_bottom}>
					<Button
						otherClass={styles.OrderFinish__submit}
						handleClick={() => setOpen(!open)}>
						Подтвердить заказ
					</Button>
					<p>
						Ваши личные данные будут использоваться для обработки ваших
						заказов, упрощения вашей работы с сайтом и для других целей,
						описанных в
						<a href="/">нашей политике конфиденциальности</a>
					</p>
				</div>
			</div>
		</div>
	)
}

export default OrderFinish
