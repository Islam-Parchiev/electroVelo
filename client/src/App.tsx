import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'

import { useAppDispatch } from '@redux/store'

import { AuthService } from '@services/auth.service'

import { login, logout } from '@redux/slices/userSlice'

import { getTokenFromLocalStorage } from './helpers/localStorage.helper'

import { router } from './router/Router'



function App() {
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
	return <RouterProvider router={router} />
}

export default App
