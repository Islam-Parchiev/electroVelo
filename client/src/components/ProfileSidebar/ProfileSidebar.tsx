import React from 'react'

import MyAccount from '@components/MyAccount/MyAccount';

import styles from './ProfileSidebar.module.scss'

interface ProfileSidebarProps {}

const ProfileSidebar:React.FC<ProfileSidebarProps> = (props) => {
	const {} = props;
	return (
		<aside className={styles.ProfileSidebar}>
			<MyAccount anotherClass={styles.ProfileSidebar__info}/>
		</aside>
	)
}

export default ProfileSidebar
