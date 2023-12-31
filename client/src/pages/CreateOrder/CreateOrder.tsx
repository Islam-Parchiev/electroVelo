import React from 'react'

import Header from '@components/Header/Header';
import CreateOrderTop from '@components/CreateOrderTop/CreateOrderTop';

import styles from './CreateOrder.module.scss';

const CreateOrder:React.FC = () => {
	return (
		<>
		  <Header otherClass={styles.CreateOrder__header}/>
			<main className={styles.CreateOrder}>
				<CreateOrderTop/>
			</main>
		</>
	)
}

export default CreateOrder
