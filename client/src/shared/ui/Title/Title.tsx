import React, { ReactNode } from 'react'

import styles from './Title.module.scss'

interface TitleProps {
	children: ReactNode;
	type: 'light' | 'black';
}

const Title: React.FC<TitleProps> = (props) => {
	const {
		children,
		type,
	} = props;
	const t = type === 'light' ? styles.light : styles.black;
	return (
		<h1 className={`${styles.Title} ${t}`}>
			{children}
		</h1>
	)
}

export { Title };
