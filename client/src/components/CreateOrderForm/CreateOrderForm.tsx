import React from 'react'

import FormInput from '@components/FormInput/FormInput'

import styles from './CreateOrderForm.module.scss'

const CreateOrderForm: React.FC = () => {
	return (
		<div className={styles.CreateOrderForm__wrapper}>
			<h2 className={styles.CreateOrderForm__title}>1 Детали оплаты</h2>
			<form className={styles.CreateOrderForm}>
				<FormInput
					anotherClass={styles.CreateOrderForm__input}
					inputType="secondary"
					validationSchema={undefined}
					type="text"
					labelTitle={'Имя*'}
					error={''}
				/>
				<FormInput
					anotherClass={styles.CreateOrderForm__input}
					inputType="secondary"
					validationSchema={undefined}
					type="text"
					labelTitle={'Фамилия*'}
					error={''}
				/>
				<FormInput
					anotherClass={styles.CreateOrderForm__input}
					inputType="secondary"
					validationSchema={undefined}
					type="text"
					labelTitle={'Город*'}
					error={''}
				/>
				<FormInput
					anotherClass={styles.CreateOrderForm__input}
					inputType="secondary"
					validationSchema={undefined}
					type="text"
					labelTitle={'Улица*'}
					error={''}
				/>
				<FormInput
					anotherClass={styles.CreateOrderForm__input}
					inputType="secondary"
					validationSchema={undefined}
					type="text"
					labelTitle={'Дом*'}
					error={''}
				/>
				<FormInput
					anotherClass={styles.CreateOrderForm__input}
					inputType="secondary"
					validationSchema={undefined}
					type="text"
					labelTitle={'Кв*'}
					error={''}
				/>
				<FormInput
					anotherClass={styles.CreateOrderForm__input}
					inputType="secondary"
					validationSchema={undefined}
					type="text"
					labelTitle={'Телефон*'}
					error={''}
				/>
				<FormInput
					anotherClass={styles.CreateOrderForm__input}
					inputType="secondary"
					validationSchema={undefined}
					type="text"
					labelTitle={'E-mail*'}
					error={''}
				/>
				<textarea
					className={styles.CreateOrderForm__textt}
					placeholder="Комментарий к заказу"></textarea>
			</form>
		</div>
	)
}

export default CreateOrderForm
