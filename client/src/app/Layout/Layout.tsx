import { FC, useEffect } from 'react'
import { Outlet } from 'react-router-dom'


import { useAppDispatch } from '../store/hooks'


import { login, logout } from '../../entities/User/model/userSlice'

import Footer from '../../widgets/Footer/Footer'

import { AuthService } from '../../shared/services/auth.service'

import { getTokenFromLocalStorage } from '../../shared/helpers/localStorage.helper'
export const Layout: FC = () => {
	const dispatch = useAppDispatch()

	const checkAuth = async () => {
		const token = getTokenFromLocalStorage()
		try {
			if (token) {
				const data = await AuthService.getProfile()

				if (data) {
					dispatch(login(data))
				} else {
					dispatch(logout())
				}
			}
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		checkAuth()
	}, [])
	return (
		<>
			<Outlet />
			<Footer />
		</>
	)
}
