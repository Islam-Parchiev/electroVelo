import { FC } from 'react'

import { Outlet } from 'react-router-dom';

import Header from '../../../widgets/Header/Header'

import Subscribe from '../../../widgets/Subscribe/Subscribe';

import ProfileSidebar from './ProfileSidebar/ProfileSidebar';

import styles from './Profile.module.scss';

export const Profile: FC = () => {
	return (
		<>
			<Header otherClass="FixedHeader" />
			<main className={styles.Profile}>
				<div className="container">
					<div className={styles.Profile__wrapper}>
						<ProfileSidebar />
						<Outlet />
					</div>
				</div>
				<Subscribe />
			</main>
		</>
	)
}

