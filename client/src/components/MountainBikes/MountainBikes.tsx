import React from 'react'

import styles from './MountainBikes.module.scss'

interface MountainBikesProps {}

const MountainBikes:React.FC<MountainBikesProps> = (props) => {
	const {} = props;
	return (
		<div className={styles.MountainBikes}>
			MountainBikes Component
		</div>
	)
}

export default MountainBikes