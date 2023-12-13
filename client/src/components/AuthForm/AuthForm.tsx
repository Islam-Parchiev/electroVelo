import React from 'react'

import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useAppDispatch } from '@redux/store'


import { login } from '@redux/slices/userSlice'
import { AuthService } from '@services/auth.service'

import Checkbox from '@components/Checkbox/Checkbox'
import Button from '@components/Button/Button'
import FormInput from '@components/FormInput/FormInput'

import { ActiveForm } from '@components/Header/Header'

import { setTokenToLocalStorage } from '../../helpers/localStorage.helper'

import styles from './AuthForm.module.scss'

interface AuthFormProps {
	handleActiveForm: any
}

const AuthForm: React.FC<AuthFormProps> = props => {
	const { handleActiveForm } = props
	const dispatch = useAppDispatch();

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

	const onSubmit: SubmitHandler<any> = async (data) => {
		try{
			alert(`Your name ${data}`)
			console.log(data)
			const rdata = await AuthService.login({email: data.email,password: data.password})
			console.log('rdata',rdata);
			if(rdata) {
				setTokenToLocalStorage('token',rdata.token)
				dispatch(login(data))
			}
		}catch(err:any){
			const error  =err.response?.data.message;
			console.log(error);
		}finally {
			reset()
		}
	}
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
