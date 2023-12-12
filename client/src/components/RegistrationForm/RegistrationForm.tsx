import React from 'react'

import { useForm, SubmitHandler, Controller } from 'react-hook-form'

import Button from '@components/Button/Button'
import FormInput from '@components/FormInput/FormInput'

import { ActiveForm } from '@components/Header/Header'

import styles from './RegistrationForm.module.scss'

interface RegistrationFormProps {
	handleActiveForm: any
}

const RegistrationForm: React.FC<RegistrationFormProps> = props => {
	const { handleActiveForm } = props

	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
		reset,
		setValue,
		watch,
	} = useForm<{ name: string; email: string; password: any; confirmPassword: any }>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<any> = data => {
		alert(`Your name ${data.name}`)
		reset()
	}
	return (
		<div className={styles.RegistrationForm}>
			<div className={styles.RegistrationForm__header}>
				<button className={`btn-reset ${styles.active}`}>Регистрация</button>
				<button
					className="btn-reset"
					onClick={() => handleActiveForm(ActiveForm.Auth)}>
					Войти
				</button>
			</div>
			<form
				className={styles.RegistrationForm__form}
				onSubmit={handleSubmit(onSubmit)}>
				{/* <FormInput title="Имя пользователя"/>
				<FormInput title="E-mail"/>
				<FormInput title="Пароль"/>
				<FormInput title="Подтвердите пароль"/> */}
				<label className={styles.FormInput}>
					<span>Имя пользователя</span>
					<input
						{...register('name', {
							required: 'Name is require field!',
							maxLength: 10,
							minLength: 2,
						})}
						type="text"
						className="input-reset"
					/>
					{errors?.name && (
						<div style={{ color: 'red' }}>{errors.name.message}</div>
					)}
				</label>
				<label className={styles.FormInput}>
					<span>E-mail</span>
					<input
						{...register('email', {
							required: 'Emaile is require field!',

							pattern: {
								value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,

								message: 'Please enter valid email!',
							},
						})}
						className="input-reset"
					/>
					{errors.email && (
						<div style={{ color: 'red' }}>{errors.email.message}</div>
					)}
				</label>
				<label className={styles.FormInput}>
					<span>Пароль</span>
					<input
						{...register('password', {
							required: true,
						})}
						className="input-reset"
					/>
				</label>
				<label className={styles.FormInput}>
					<span>Подтвердите пароль</span>
					<input
						{...register('confirmPassword', {
							required: true,
							validate: (val: string) => {
								if (watch('password') !== val) {
									return 'Your passwords do no match'
								}
							},
						})}
						className="input-reset"
					/>
				</label>
				<Button otherClass={styles.RegistrationForm__submit}>
					Регистрация
				</Button>
				<div className={styles.RegistrationForm__bottom}>bottm</div>
			</form>
		</div>
	)
}

export default RegistrationForm
