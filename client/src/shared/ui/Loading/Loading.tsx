import React from 'react'

import styles from './Loading.module.scss'

const Loading:React.FC= () => {
	return (
		<div className={styles.Loading}>
			<span>Loading...</span>
		</div>
	)
}

export default Loading
