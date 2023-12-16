import { FC } from 'react'

import Header from '@components/Header/Header'
import CartTop from '@components/CartTop/CartTop';

import styles from './Cart.module.scss';
const Main:FC = () => {
	return (
		<>
			<Header otherClass={styles.Cart__header}/>
			<main className={styles.Cart}>
				<CartTop/>
			</main>
		</>
	)
}

export default Main
