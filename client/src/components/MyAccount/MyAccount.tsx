import React from 'react'
import { Link } from 'react-router-dom';

import { useAppDispatch } from '@redux/store';

import { logout } from '@redux/slices/userSlice';

import { removeTokenFromLocalStorage } from '../../helpers/localStorage.helper';


import styles from './MyAccount.module.scss'

interface MyAccountProps {
	anotherClass?:string;
}

const MyAccount:React.FC<MyAccountProps> = (props) => {
	const {
		anotherClass='',
	} = props;
	const dispatch = useAppDispatch()
	const handleLogout = () => {
		removeTokenFromLocalStorage('token')
		dispatch(logout())
	}
	return (
		<div className={`${styles.MyAccount} ${anotherClass}`}>
			<h2 className={styles.MyAccount__title}>Мой аккаунт</h2>
			<ul className={`list-reset ${styles.MyAccount__list}`}>
				<li className={styles.MyAccount__item}>
					<Link to="history">История заказов</Link>
				</li>
				<li className={styles.MyAccount__item}>
					<Link to="data">Персональные данные</Link>
				</li>
				<li className={styles.MyAccount__item}>
					<Link to="/">Смена пароля</Link>
				</li>
				<li className={styles.MyAccount__item}>
					<Link to="/">Список желаний</Link>
				</li>
			</ul>
			<button className={`btn-reset ${styles.MyAccount__logout}`} onClick={handleLogout}>Выйти</button>
		</div>
	)
}

export default MyAccount
