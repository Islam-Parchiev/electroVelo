import React from 'react'

import { useForm, SubmitHandler } from 'react-hook-form'

import { AuthService } from '@services/auth.service'

import Button from '@components/Button/Button'
import { ActiveForm } from '@components/Header/Header'

import styles from './RegistrationForm.module.scss'

interface RegistrationFormProps {
	handleActiveForm: any
}

const RegistrationForm: React.FC<RegistrationFormProps> = props => {
	const { handleActiveForm } = props

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		watch,
	} = useForm<{ name: string; email: string; password: any; confirmPassword: any }>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<any> = data => {
		alert(`Your name ${data}`)
		console.log(data);
		console.log(AuthService.registration({
			name:data.name,
			email:data.email,
			password:data.password,
		}))
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
			</form>
		</div>
	)
}

export default RegistrationForm
// John22233
// john1122@gmail.com
// 11jj22jjA