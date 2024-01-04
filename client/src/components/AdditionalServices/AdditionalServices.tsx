import React from 'react'

import ContactsAccordion from '@components/ContactsAccordion/ContactsAccordion';

import styles from './AdditionalServices.module.scss'

interface AdditionalServicesProps {}

const AdditionalServices:React.FC<AdditionalServicesProps> = (props) => {
	const {} = props;
	return (
		<section className={styles.AdditionalServices}>
			<div className="container">
				<div className={styles.AdditionalServices__inner}>
					<h2 className={styles.AdditionalServices__title}>
					Дополнительные услуги
					</h2>
					<div className={styles.AdditionalServices__content}>
						<ContactsAccordion accordionTitle="Ремонт привода">
							<ul className={`list-reset ${styles.AdditionalServices__list}`}>
								<li className={styles.AdditionalServices__item}>
									<span className={styles.AdditionalServices__item_title}>Укорачивание штока вилки</span>
									<span className={styles.AdditionalServices__item_price}>600 ₽</span>
								</li>
								<li className={styles.AdditionalServices__item}>
									<span className={styles.AdditionalServices__item_title}>Укорачивание штока вилки</span>
									<span className={styles.AdditionalServices__item_price}>600 ₽</span>
								</li>
								<li className={styles.AdditionalServices__item}>
									<span className={styles.AdditionalServices__item_title}>Укорачивание штока вилки</span>
									<span className={styles.AdditionalServices__item_price}>600 ₽</span>
								</li>
								<li className={styles.AdditionalServices__item}>
									<span className={styles.AdditionalServices__item_title}>Укорачивание штока вилки</span>
									<span className={styles.AdditionalServices__item_price}>600 ₽</span>
								</li>

							</ul>
						</ContactsAccordion>
						<ContactsAccordion accordionTitle="Ремонт привода">
							<ul className={`list-reset ${styles.AdditionalServices__list}`}>
								<li className={styles.AdditionalServices__item}>
									<span className={styles.AdditionalServices__item_title}>Укорачивание штока вилки</span>
									<span className={styles.AdditionalServices__item_price}>600 ₽</span>
								</li>
								<li className={styles.AdditionalServices__item}>
									<span className={styles.AdditionalServices__item_title}>Укорачивание штока вилки</span>
									<span className={styles.AdditionalServices__item_price}>600 ₽</span>
								</li>
								<li className={styles.AdditionalServices__item}>
									<span className={styles.AdditionalServices__item_title}>Укорачивание штока вилки</span>
									<span className={styles.AdditionalServices__item_price}>600 ₽</span>
								</li>
								<li className={styles.AdditionalServices__item}>
									<span className={styles.AdditionalServices__item_title}>Укорачивание штока вилки</span>
									<span className={styles.AdditionalServices__item_price}>600 ₽</span>
								</li>
								
							</ul>
						</ContactsAccordion>
						<ContactsAccordion accordionTitle="Ремонт привода">
							<ul className={`list-reset ${styles.AdditionalServices__list}`}>
								<li className={styles.AdditionalServices__item}>
									<span className={styles.AdditionalServices__item_title}>Укорачивание штока вилки</span>
									<span className={styles.AdditionalServices__item_price}>600 ₽</span>
								</li>
								<li className={styles.AdditionalServices__item}>
									<span className={styles.AdditionalServices__item_title}>Укорачивание штока вилки</span>
									<span className={styles.AdditionalServices__item_price}>600 ₽</span>
								</li>
								<li className={styles.AdditionalServices__item}>
									<span className={styles.AdditionalServices__item_title}>Укорачивание штока вилки</span>
									<span className={styles.AdditionalServices__item_price}>600 ₽</span>
								</li>
								<li className={styles.AdditionalServices__item}>
									<span className={styles.AdditionalServices__item_title}>Укорачивание штока вилки</span>
									<span className={styles.AdditionalServices__item_price}>600 ₽</span>
								</li>
								
							</ul>
						</ContactsAccordion>
						<ContactsAccordion accordionTitle="Ремонт привода">
							<ul className={`list-reset ${styles.AdditionalServices__list}`}>
								<li className={styles.AdditionalServices__item}>
									<span className={styles.AdditionalServices__item_title}>Укорачивание штока вилки</span>
									<span className={styles.AdditionalServices__item_price}>600 ₽</span>
								</li>
								<li className={styles.AdditionalServices__item}>
									<span className={styles.AdditionalServices__item_title}>Укорачивание штока вилки</span>
									<span className={styles.AdditionalServices__item_price}>600 ₽</span>
								</li>
								<li className={styles.AdditionalServices__item}>
									<span className={styles.AdditionalServices__item_title}>Укорачивание штока вилки</span>
									<span className={styles.AdditionalServices__item_price}>600 ₽</span>
								</li>
								<li className={styles.AdditionalServices__item}>
									<span className={styles.AdditionalServices__item_title}>Укорачивание штока вилки</span>
									<span className={styles.AdditionalServices__item_price}>600 ₽</span>
								</li>
								
							</ul>
						</ContactsAccordion>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AdditionalServices
