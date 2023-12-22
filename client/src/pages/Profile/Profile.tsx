import {FC} from 'react'

import { Outlet } from 'react-router-dom';

import Header from '@components/Header/Header'

import './Profile.scss';

const Profile:FC = () => {
	return (
		<>
			<Header/>
			<main className="Profile">
				<Outlet />
			</main>
		</>
	)
}

export default Profile
