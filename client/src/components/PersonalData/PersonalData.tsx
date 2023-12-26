import React from 'react'

import styles from './PersonalData.module.scss'

interface PersonalDataProps {}

const PersonalData:React.FC<PersonalDataProps> = (props) => {
	const {} = props;
	return (
		<div className={styles.PersonalData}>
			PersonalData Component
		</div>
	)
}

export default PersonalData
