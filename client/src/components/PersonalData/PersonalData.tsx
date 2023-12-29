import React from 'react'

import { useForm, SubmitHandler } from 'react-hook-form'

import { AuthService } from '@services/auth.service'

import ProfileTitle from '@components/ProfileTitle/ProfileTitle';
import FormInput from '@components/FormInput/FormInput';
import Button from '@components/Button/Button';

import styles from './PersonalData.module.scss'


interface IAddress {
	city:string;
	street:string;
	house:string;
	floor:string;
	flat:string;
}
interface IFormData {
	 	name: string;
	  email: string;
		password: string;
		confirmPassword: string;
		phone:string;
		address:IAddress;
}
const PersonalData:React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IFormData>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<IFormData> = data => {
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
	
	const valPhone = {...register('phone',{
		required:'Phone is require field!',
	})}
	const valAddress = {...register('address.city', {

		required: 'This is require field!',
	})}
	
	return (
		<div className={styles.PersonalData}>
			<div className={styles.PersonalData__wrapper}>
				<ProfileTitle>Персональные данные</ProfileTitle>

				<form
				 onSubmit={handleSubmit(onSubmit)} 
				 className={`${styles.PersonalData__form} ${styles.Form}`}>
					<div className={styles.Form__header}>
						<FormInput 
							labelTitle="Имя" 
							type="text"
							validationSchema={valName}
							error={errors?.name?.message}/>
						<FormInput 
							labelTitle="Фамилия" 
							type="text"
							validationSchema={valName}
							error={errors?.name?.message}/>
					</div>
					<div className={styles.Form__body}>
						<FormInput 
							labelTitle="Отображаемое имя" 
							type="text"
							validationSchema={valName}
							error={errors?.name?.message}/>
						<FormInput 
							labelTitle="E-mail" 
							type="email"
							validationSchema={valEmail}
							error={errors?.email?.message}/>
						<FormInput 
							labelTitle="Телефон" 
							type="phone"
							validationSchema={valPhone}
							error={errors?.phone?.message}/>
						<FormInput 
							labelTitle="Город" 
							type="text"
							validationSchema={valAddress}
							error={errors?.address?.message}
						/>
						<FormInput 
							labelTitle="Улица" 
							type="text"
							validationSchema={valAddress}
							error={errors?.address?.message}/>
					</div>
					<div className={styles.Form__footer}>
						<FormInput 
							labelTitle="Дом" 
							type="text"
							validationSchema={valAddress}
							error={errors?.address?.message}
						/>
						<FormInput 
							labelTitle="Этаж" 
							type="text"
							validationSchema={valAddress}
							error={errors?.address?.message}
						/>
						<FormInput 
							labelTitle="Квартира" 
							type="text"
							validationSchema={valAddress}
							error={errors?.address?.city?.message}
						/>
					</div>
					<Button otherClass={styles.Form__submit}>Изменить</Button>
				</form>
			</div>
		</div>
	)
}

export default PersonalData
