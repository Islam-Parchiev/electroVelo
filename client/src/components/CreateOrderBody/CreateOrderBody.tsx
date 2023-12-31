import React from 'react'

import CreateOrderForm from '@components/CreateOrderForm/CreateOrderForm'

import styles from './CreateOrderBody.module.scss'

interface CreateOrderBodyProps {}

const CreateOrderBody: React.FC<CreateOrderBodyProps> = props => {
	const {} = props
	return (
		<section className={styles.CreateOrderBody}>
			<div className="container">
				<div className={styles.CreateOrderBody__wrapper}>
					<div className={styles.CreateOrderBody__top}>
						<CreateOrderForm/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CreateOrderBody
