import React from 'react'

import Button from '@components/Button/Button';
import FormInput from '@components/FormInput/FormInput';

import { ActiveForm } from '@components/Header/Header';

import styles from './RegistrationForm.module.scss'

interface RegistrationFormProps {
	handleActiveForm:any;
}

const RegistrationForm:React.FC<RegistrationFormProps> = (props) => {
	const {
		handleActiveForm,
	} = props;
	return (
		<div className={styles.RegistrationForm}>
			<div className={styles.RegistrationForm__header}>
				<button className={`btn-reset ${styles.active}`}>
					Регистрация
				</button>
				<button className="btn-reset"  onClick={()=> handleActiveForm(ActiveForm.Auth)}>
						Войти
				</button>
				
			</div>
			<form className={styles.RegistrationForm__form}>
				<FormInput title="Имя пользователя"/>
				<FormInput title="E-mail"/>
				<FormInput title="Пароль"/>
				<FormInput title="Подтвердите пароль"/>

				<Button otherClass={styles.RegistrationForm__submit}>
				Регистрация
				</Button>
				<div className={styles.RegistrationForm__bottom}>
				bottm
				</div>
			</form>
		</div>
	)
}

export default RegistrationForm
