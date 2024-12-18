import { FC, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import Footer from '@components/Footer/Footer'
import { useAppDispatch } from '@redux/store'


import { AuthService } from '@services/auth.service'
import { login, logout } from '@redux/slices/userSlice'

import { getTokenFromLocalStorage } from './../../helpers/localStorage.helper'
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
