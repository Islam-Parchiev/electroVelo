import React from 'react'

import { AxiosError } from 'axios'

import { useForm, SubmitHandler } from 'react-hook-form'
import { useAppDispatch } from '@redux/store'


import { login } from '../../../../entities/User/model/userSlice'

import { AuthService } from '../../../../shared/services/auth.service'

import { setTokenToLocalStorage } from '../../../../shared/helpers/localStorage.helper'

export function useAuthForm() {
	const dispatch = useAppDispatch();
	const [check, setCheck] = React.useState(true);
	const [value, setValue] = React.useState(1);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<{ email: string; password: string; }>(
		{
			mode: 'onChange',
		},
	)

	type SubmitDataType = {
		email: string;
		password: string;
	}
	const onSubmit: SubmitHandler<SubmitDataType> = async (data) => {
		try {
			alert(`Your name ${data}`)
			console.log(data)
			const rdata = await AuthService.login({ email: data.email, password: data.password })
			console.log('rdata', rdata);
			if (rdata) {
				setTokenToLocalStorage('token', rdata.token)
				dispatch(login(rdata))
				console.log('loggent');
			}
		} catch (err) {
			if (err instanceof AxiosError) {
				const error = err.response?.data.message;
				console.log('autherror', error);
			}
		} finally {
			reset()
		}
	}
	const valEmail = {
		...register('email', {
			required: 'Email is require field!',

			pattern: {
				value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,

				message: 'Please enter valid email!',
			},
		}),
	}
	const valPassword = {
		...register('password', {
			required: 'Password is require field!',
		}),
	}

	return {
		handleSubmit,
		errors,
		check,
		setCheck,
		value,
		setValue,
		onSubmit,
		valEmail,
		valPassword,
	}

}
