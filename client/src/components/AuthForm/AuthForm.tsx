import React from 'react'

import { Link } from 'react-router-dom';

import Checkbox from '@components/Checkbox/Checkbox';
import Button from '@components/Button/Button';
import FormInput from '@components/FormInput/FormInput';

import { ActiveForm } from '@components/Header/Header';

import styles from './AuthForm.module.scss'

interface AuthFormProps {
	handleActiveForm:any;
}

const AuthForm:React.FC<AuthFormProps> = (props) => {
	const {
		handleActiveForm,
	} = props;
	return (
		<div className={styles.AuthForm}>
			<div className={styles.AuthForm__header}>
				<button className={`btn-reset ${styles.active}`}>
						Войти
				</button>
				<button className="btn-reset" onClick={()=> handleActiveForm(ActiveForm.Registr)}>
					Регистрация
				</button>
			</div>

			<form className={styles.AuthForm__form}>
				<FormInput title="E-mail"/>
				<FormInput title="Пароль"/>

				<Button otherClass={styles.AuthForm__submit}>
					Войти
				</Button>
				<div className={styles.AuthForm__bottom}>
					<Checkbox	text="Запомнить меня" otherClass={styles.AuthForm__checkbox}/> 
					<Link to="/">Забыли пароль?</Link>
				</div>
			</form>
				
		</div>
	)
}

export default AuthForm
