import React from 'react'

import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'

import { AuthService } from '@services/auth.service'

import Checkbox from '@components/Checkbox/Checkbox'
import Button from '@components/Button/Button'

import { ActiveForm } from '@components/Header/Header'

import styles from './AuthForm.module.scss'

interface AuthFormProps {
	handleActiveForm: any
}

const AuthForm: React.FC<AuthFormProps> = props => {
	const { handleActiveForm } = props

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<{ name: string; email: string; password: string; confirmPassword: any }>(
		{
			mode: 'onChange',
		},
	)

	const onSubmit: SubmitHandler<any> = data => {
		alert(`Your name ${data}`)
		console.log(data)
		console.log('...........',AuthService.login({
			email: data.email,
			password: data.password,
		}).then(data=>console.log(data)))
		reset()
	}

	return (
		<div className={styles.AuthForm}>
			<div className={styles.AuthForm__header}>
				<button className={`btn-reset ${styles.active}`}>Войти</button>
				<button
					className="btn-reset"
					onClick={() => handleActiveForm(ActiveForm.Registr)}>
					Регистрация
				</button>
			</div>

			<form className={styles.AuthForm__form} onSubmit={handleSubmit(onSubmit)}>
				<label className={styles.FormInput}>
					<span>E-mail</span>
					<input
						{...register('email', {
							required: 'Email is require field!',

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
							required: 'Password is require!',
						})}
						className="input-reset"
					/>
					{errors.password && (
						<div style={{ color: 'red' }}>
							{errors.password.message}
						</div>
					)}
				</label>

				<Button otherClass={styles.AuthForm__submit}>Войти</Button>
				<div className={styles.AuthForm__bottom}>
					<Checkbox
						text="Запомнить меня"
						otherClass={styles.AuthForm__checkbox}
					/>
					<Link to="/">Забыли пароль?</Link>
				</div>
			</form>
		</div>
	)
}

export default AuthForm
