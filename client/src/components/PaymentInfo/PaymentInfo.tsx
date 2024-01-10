import React from 'react'

import ContactsAccordion from '@components/ContactsAccordion/ContactsAccordion'

import styles from './PaymentInfo.module.scss'

const PaymentInfo:React.FC= () => {

	return (
		<section className={styles.PaymentInfo}>
			<div className="container">
				<div className={styles.PaymentInfo__inner}>
					<h2 className={styles.PaymentInfo__title}>ИНФОРМАЦИЯ ОБ ОПЛАТЕ</h2>
					<div className={styles.PaymentInfo__text}>
						<p>
						Для удобства покупателей, действует несколько способов отплаты. 
						Ниже, вы можете ознакомится с подробностями и выбрать наиболее подходящий.
						 Любой из способов доступен при оформление заказа через корзину или операторов.
						</p>
					</div>
					<div className={styles.PaymentInfo__content}>
						<ContactsAccordion accordionTitle="Оплата наличными">
							<div className={styles.PaymentInfo__accordion}>
								<span>Оплата наличными производится при непосредственной доставки курьеру
									или заранее в нашем магазине. Адреса: Москва, ул. Доватора, дом 7/8 с1</span>
								
							</div>
						</ContactsAccordion>
						<ContactsAccordion accordionTitle="Оплата банковскими картами">
							<div className={styles.PaymentInfo__accordion}>
								<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nam.</span>
								
							</div>
						</ContactsAccordion>
						<ContactsAccordion accordionTitle="Оплата через сайт">
							<div className={styles.PaymentInfo__accordion}>
								<span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo quae inventore magnam, 
									nam repudiandae eaque dolore praesentium reprehenderit voluptatibus sint quos facilis iusto,
									 in delectus, nulla architecto nihil quisquam aperiam!</span>
								
							</div>
						</ContactsAccordion>
						<ContactsAccordion accordionTitle="Безопасность электронных платежей">
							<div className={styles.PaymentInfo__accordion}>
								<span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam soluta odit non, repudiandae distinctio tenetur.</span>
								
							</div>
						</ContactsAccordion>
						<ContactsAccordion accordionTitle="Оплата в рассрочку картой «Халва»">
							<div className={styles.PaymentInfo__accordion}>
								<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nam.</span>
								
							</div>
						</ContactsAccordion>
						<ContactsAccordion accordionTitle="Оплата заказов при доставке по России">
							<div className={styles.PaymentInfo__accordion}>
								<span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo quae inventore magnam, 
									nam repudiandae eaque dolore praesentium reprehenderit voluptatibus sint quos facilis iusto,
									 in delectus, nulla architecto nihil quisquam aperiam!</span>
								
							</div>
						</ContactsAccordion>
						<ContactsAccordion accordionTitle="Покупка в кредит">
							<div className={styles.PaymentInfo__accordion}>
								<span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam soluta odit non, repudiandae distinctio tenetur.</span>
								
							</div>
						</ContactsAccordion>
					</div>

				</div>
			</div>
		</section>
	)
}

export default PaymentInfo
