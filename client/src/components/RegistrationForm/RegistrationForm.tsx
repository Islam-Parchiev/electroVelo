import React from 'react'

import { useForm, SubmitHandler } from 'react-hook-form'

import { AuthService } from '@services/auth.service'

import Button from '@components/Button/Button'
import { ActiveForm } from '@components/Header/Header'
import FormInput from '@components/FormInput/FormInput'

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
	const valName =		{...register('name', {
		required: 'Name is require fielddddd!',
		maxLength: {value:10,message:'test'},
		minLength: 2,
	})}
	const valEmail = 	{...register('email', {
		required: 'Email is require field!',

		pattern: {
			value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,

			message: 'Please enter valid email!',
		},
	})}
	const valPassword = {...register('password', {
		required: 'Password is require field!',
	})}
	const valConfirmPassword =	{...register('confirmPassword', {
		required: true,
		validate: (val: string) => {
			if (watch('password') !== val) {
				return 'Your passwords do no match'
			}
		},
	})}
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
				<FormInput 
					labelTitle="Имя пользователя" 
					validationSchema={valName} 
					error={errors?.name?.message}
					type="name"
				/>
				<FormInput 
					labelTitle="Email" 
					validationSchema={valEmail} 
					error={errors?.email?.message}
					type="email"
				/>

				<FormInput 
					labelTitle="Пароль" 
					validationSchema={valPassword} 
					error={errors?.password?.message}
					type="password"
				/>

				<FormInput
					labelTitle="Подтвердите пароль"
					validationSchema={valConfirmPassword}
					error={errors?.confirmPassword?.message}
					type="password"
					/>
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

// test23455
// testtt0005@gmail.com
// test123123