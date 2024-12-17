import axios from 'axios'

import { getTokenFromLocalStorage } from '../helpers/localStorage.helper'

export const instance = axios.create({
	baseURL: 'http://localhost:4200',
	headers: {
		Authorization: 'Bearer ' + getTokenFromLocalStorage() || '',
	},
})
