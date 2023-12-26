import React from 'react'

import styles from './ProfileTitle.module.scss'

interface ProfileTitleProps {
	children:string;
}

const ProfileTitle:React.FC<ProfileTitleProps> = (props) => {
	const {
		children,
	} = props;
	return (
		<h1 className={styles.ProfileTitle}>{children}</h1>
	)
}

export default ProfileTitle
