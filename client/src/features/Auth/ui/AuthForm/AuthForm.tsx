import React from 'react'

import { Link } from 'react-router-dom'

import { ActiveForm } from '../../../../widgets/Header/Header'

import { Checkbox, Button, FormInput } from '../../../../shared/ui'


import styles from './AuthForm.module.scss'
import { useAuthForm } from './useAuthForm'

interface AuthFormProps {
	handleActiveForm: (value: ActiveForm) => void;
}

const AuthForm: React.FC<AuthFormProps> = props => {
	const { handleActiveForm } = props
	const {
		check,
		errors,
		handleSubmit,
		onSubmit,
		setCheck,
		setValue,
		valEmail,
		valPassword,
		value,
	} = useAuthForm();

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
					inputType="primary"
					labelTitle="Email"
					validationSchema={valEmail}
					error={errors?.email?.message}
					type="email"
				/>

				<FormInput
					inputType="primary"
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
						check={check}
						setCheck={setCheck}
						value={value}
						setValue={setValue}
					/>
					<Link to="/">Забыли пароль?</Link>
				</div>
			</form>
		</div>
	)
}

export default AuthForm
// andrey333@gmail.com
// and222
