import React, { ReactNode } from 'react'

import styles from './AboutUsSubtitle.module.scss'

interface AboutUsTitleProps {
	children: ReactNode
	variant: 'light' | 'black'
}

const AboutUsSubtitle: React.FC<AboutUsTitleProps> = props => {
	const { children, variant = 'light' } = props
	return (
		<h2
			className={`${styles.AboutUsSubtitle} ${
				variant === 'light' ? styles.light : styles.black
			}`}>
			{children}
		</h2>
	)
}

export default AboutUsSubtitle
