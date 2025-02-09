import React from 'react'

import ContactsAccordion from '@pages/Contacts/ui/ContactsAccordion/ContactsAccordion'

import styles from './DeliveryInfo.module.scss'

const DeliveryInfo: React.FC = () => {
	return (
		<section className={styles.DeliveryInfo}>
			<div className="container">
				<div className={styles.DeliveryInfo__inner}>
					<h2 className={styles.DeliveryInfo__title}>
						Информация о доставке
					</h2>
					<div className={styles.DeliveryInfo__text}>
						<p>
							Для удобства покупателей действует несколько способов
							доставки товаров. Существует доставка по Москве и М.О.,
							доставка по регионам России и самовывоз. Любой
							из способов доступен при оформление заказа через сайт
							или у операторов.
						</p>
						<p>
							Велосипеды и вело-станки доставляются в собранном
							и настроенном виде.
						</p>
						<span>
							На любые вопросы по правилам и стоимости доставки
							ответят оператор: <a href="/">+7(495)055-75-86</a>
						</span>
					</div>
					<div className={styles.DeliveryInfo__content}>
						<ContactsAccordion accordionTitle="Доставка по Москве, в пределах МКАД">
							<div className={styles.DeliveryInfo__accordion}>
								<span>
									Заказы стоимостью до 20 тыс. ₽ — 1 000 ₽
								</span>
								<span>
									Заказы стоимостью более 20 тыс. ₽
									— Бесплатно.
								</span>
								<span>
									Доставка негабаритных товаров рассчитывается
									отдельно.
								</span>
								<span>
									Срок доставки не более 2 дней с момента
									согласования заказа. При доставке по Москве
									оплату товара можно произвести курьеру.
								</span>
							</div>
						</ContactsAccordion>
						<ContactsAccordion accordionTitle="Доставка по Московской Области">
							<div className={styles.DeliveryInfo__accordion}>
								<span>
									Заказы стоимостью до 20 тыс. ₽ — 1 000 ₽
								</span>
								<span>
									Заказы стоимостью более 20 тыс. ₽
									— Бесплатно.
								</span>
								<span>
									Доставка негабаритных товаров рассчитывается
									отдельно.
								</span>
								<span>
									Срок доставки не более 2 дней с момента
									согласования заказа. При доставке по Москве
									оплату товара можно произвести курьеру.
								</span>
							</div>
						</ContactsAccordion>
						<ContactsAccordion accordionTitle="Доставка в другие регионы России">
							<div className={styles.DeliveryInfo__accordion}>
								<span>
									Заказы стоимостью до 20 тыс. ₽ — 1 000 ₽
								</span>
								<span>
									Заказы стоимостью более 20 тыс. ₽
									— Бесплатно.
								</span>
								<span>
									Доставка негабаритных товаров рассчитывается
									отдельно.
								</span>
								<span>
									Срок доставки не более 2 дней с момента
									согласования заказа. При доставке по Москве
									оплату товара можно произвести курьеру.
								</span>
							</div>
						</ContactsAccordion>
						<ContactsAccordion accordionTitle="Магазин — пункт самовывоза в Москве">
							<div className={styles.DeliveryInfo__accordion}>
								<span>
									Заказы стоимостью до 20 тыс. ₽ — 1 000 ₽
								</span>
								<span>
									Заказы стоимостью более 20 тыс. ₽
									— Бесплатно.
								</span>
								<span>
									Доставка негабаритных товаров рассчитывается
									отдельно.
								</span>
								<span>
									Срок доставки не более 2 дней с момента
									согласования заказа. При доставке по Москве
									оплату товара можно произвести курьеру.
								</span>
							</div>
						</ContactsAccordion>
					</div>
				</div>
			</div>
		</section>
	)
}

export default DeliveryInfo
