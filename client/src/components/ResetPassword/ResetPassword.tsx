import React from 'react'

import { SubmitHandler, useForm } from 'react-hook-form';

import ProfileTitle from '@components/ProfileTitle/ProfileTitle';
import FormInput from '@components/FormInput/FormInput';
import Button from '@components/Button/Button';

import styles from './ResetPassword.module.scss'


type SubmitHandlerType ={
	 oldPassword:string; 
	 newPassword:string;
	  confirmPassword:string; 
}

const ResetPassword:React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		watch,
	} = useForm<SubmitHandlerType>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<SubmitHandlerType> = data => {
		alert(`Your name ${data}`)
		console.log(data);
		// console.log(AuthService.registration({
		// 	name:data.name,
		// 	email:data.email,
		// 	password:data.password,
		// }))
		reset()
	}
	const valNewPassword = {...register('newPassword', {
		required: 'Password is require field!',
	})}
	const valOldPassword = {...register('oldPassword', {
		required: 'Password is require field!',
	})}
	const valConfirmPassword =	{...register('confirmPassword', {
		required: true,
		validate: (val: string) => {
			if (watch('newPassword') !== val) {
				return 'Your passwords do no match'
			}
		},
	})}
	return (
		<div className={styles.ResetPassword}>
			<div className={styles.ResetPassword__wrapper}>
				<ProfileTitle>Смена Пароля</ProfileTitle>

				<form 
					className={styles.ResetPassword__form}
					onSubmit={handleSubmit(onSubmit)}>
					<FormInput
						inputType="primary" 
						labelTitle="Старый пароль" 
						validationSchema={valOldPassword} 
						error={errors?.oldPassword?.message}
						type="password"
						anotherClass={styles.ResetPassword__input}
					/>
					<FormInput
						inputType="primary" 
						labelTitle="Новый пароль" 
						validationSchema={valNewPassword} 
						error={errors?.newPassword?.message}
						type="password"
						anotherClass={styles.ResetPassword__input}
					/>
					<FormInput
						inputType="primary"
						labelTitle="Повторите новый пароль"
						validationSchema={valConfirmPassword}
						error={errors?.confirmPassword?.message}
						type="password"
						anotherClass={styles.ResetPassword__input}
					/>
					<Button otherClass={styles.ResetPassword__submit}>
					Регистрация
					</Button>
				</form>
			</div>
		</div>
	)
}

export default ResetPassword
