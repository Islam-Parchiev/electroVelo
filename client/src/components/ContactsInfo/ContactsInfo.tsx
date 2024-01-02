import React from 'react'

import styles from './ContactsInfo.module.scss'


const ContactsInfo:React.FC = () => {

	return (
		<section className={styles.ContactsInfo}>
			<div className="container">
				<div className={styles.ContactsInfo__inner}>
					<div className={styles.ContactsInfo__left}>
						<div className={styles.ContactsInfo__block}>
							<h6 className={styles.ContactsInfo__block_title}>
								Адрес магазина:
							</h6>
							<ul className={`list-reset ${styles.ContactsInfo__block_list}`}>
								<li className={styles.ContactsInfo__block_item}>
									Россия, Москва, ул. Доватора, дом 7/8 с1
								</li>
							</ul>
						</div>
						<div className={styles.ContactsInfo__block}>
							<h6 className={styles.ContactsInfo__block_title}>
							График работы:
							</h6>
							<ul className={`list-reset ${styles.ContactsInfo__block_list}`}>
								<li className={styles.ContactsInfo__block_item}>
								Понедельник — Воскресение с 10:00 до 20:00 часа
								</li>
								<li className={styles.ContactsInfo__block_item}>
								БЕЗ ВЫХОДНЫХ
								</li>
							</ul>
						</div>
						<div className={styles.ContactsInfo__block}>
							<h6 className={styles.ContactsInfo__block_title}>
							Телефоны:
							</h6>
							<ul className={`list-reset ${styles.ContactsInfo__block_list}`}>
								<li className={styles.ContactsInfo__block_item}>
									<a href="/">
									+7 (495) 055756756
									</a>
								</li>
								<li className={styles.ContactsInfo__block_item}>
									<a href="/">
									+7 (495) 055776765
									</a>
								</li>
							</ul>
						</div>
						<div className={styles.ContactsInfo__block}>
							<h6 className={styles.ContactsInfo__block_title}>
								E-mail:
							</h6>
							<ul className={`list-reset ${styles.ContactsInfo__block_list}`}>
								<li className={styles.ContactsInfo__block_item}>
									<a href="/">
										order@world-bike.ru — заказы
									</a>
								</li>
								<li className={styles.ContactsInfo__block_item}>
									<a href="/">
										order@world-bike.ru — заказы
									</a>
								</li>
								<li className={styles.ContactsInfo__block_item}>
									<a href="/">
										order@world-bike.ru — заказы
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className={styles.ContactsInfo__right}>
						<div className={styles.ContactsInfo__block}>
							<h6 className={styles.ContactsInfo__block_title}>
							Юридическая информация:
							</h6>
							<ul className={`list-reset ${styles.ContactsInfo__left_list}`}>
								<li className={styles.ContactsInfo__left_item}>
									<span>Наименование: </span>
									ИП НЕТРЕБИН ВЛАДИСЛАВ ВЯЧЕСЛАВОВИЧ
								</li>
								<li className={styles.ContactsInfo__left_item}>
									<span>ИНН: </span>
									402573939444
									
								</li>
								<li className={styles.ContactsInfo__left_item}>
									<span>ОГРН:  </span>
									317402700004683
									
								</li>
								<li className={styles.ContactsInfo__left_item}>
									<span>Фактический адрес:   </span>
									Москва, ул. Доватора, дом 7/8 с1
									
								</li>
								<li className={styles.ContactsInfo__left_item}>
									<span>Юридический адрес:   </span>
									Москва, ул. Доватора, дом 7/8 с1
									
								</li>
								<li className={styles.ContactsInfo__left_item}>
									<span>Расчетный счет:   </span>
									40802810800000085888
									
								</li>
								<li className={styles.ContactsInfo__left_item}>
									<span>Банк: </span>
									АО «ТИНЬКОФФ БАНК»
									
								</li>
								<li className={styles.ContactsInfo__left_item}>
									<span>Корр.счет: </span>
									30101810145250000974 
									
								</li>
								<li className={styles.ContactsInfo__left_item}>
									<span>БИК:   </span>
									044525974
									
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactsInfo
