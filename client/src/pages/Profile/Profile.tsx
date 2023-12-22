import {FC} from 'react'

import { Outlet } from 'react-router-dom';

import Header from '@components/Header/Header'
import ProfileSidebar from '@components/ProfileSidebar/ProfileSidebar';

import	styles from './Profile.module.scss';

const Profile:FC = () => {
	return (
		<>
			<Header otherClass={styles.Profile__header}/>
			<main className={styles.Profile}>
				<div className="container">
					<div className={styles.Profile__wrapper}>
						<ProfileSidebar/>
						<Outlet />
					</div>
				</div>
			</main>
		</>
	)
}

export default Profile
