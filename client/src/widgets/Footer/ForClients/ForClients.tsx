import React from 'react'

import styles from './ForClients.module.scss'


const ForClients: React.FC = () => {
	return (
		<div className={styles.ForClients}>
			<h4 className={styles.ForClients_title}>Для клиента</h4>
			<ul className={`list-reset ${styles.ForClients__list}`}>
				<li className={styles.ForClients__list_item}>
					<a href="/">О нас</a>
				</li>
				<li className={styles.ForClients__list_item}>
					<a href="/">Доставка и оплата</a>
				</li>
				<li className={styles.ForClients__list_item}>
					<a href="/">Блог</a>
				</li>
				<li className={styles.ForClients__list_item}>
					<a href="/">Контакты</a>
				</li>
				<li className={styles.ForClients__list_item}>
					<a href="/">Веломастерская</a>
				</li>
				<li className={styles.ForClients__list_item}>
					<a href="/">Хранение</a>
				</li>
				<li className={styles.ForClients__list_item}>
					<a href="/">Гарантии</a>
				</li>
			</ul>
		</div>
	)
}

export default ForClients
