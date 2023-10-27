import React from 'react'

import styles from './MountainBikesItem.module.scss'

interface MountainBikesItemProps {
	title:string;
	description:string;
	imageUrl:string;
}

const MountainBikesItem: React.FC<MountainBikesItemProps> = props => {
	const {
		title,
		description,
		imageUrl,
	} = props
	return (
		<li className={styles.MountainBikesItem}>
			<div className={styles.MountainBikesItem__top}>
				<h4 className={styles.MountainBikesItem__title}>{title}</h4>
				<img src={imageUrl} alt="Icon" />
			</div>
			<div className={styles.MountainBikesItem__descr}>
				<p>
					{description}
				</p>
			</div>
		</li>
	)
}

export default MountainBikesItem
