import React from 'react'

import HeaderModal from '@components/HeaderModal/HeaderModal'

import styles from './NavItem.module.scss'

interface NavItemProps {
	children:any;
	text:string;
}

const NavItem: React.FC<NavItemProps> = props => {
	const {
		children,
		text,
	} = props
	const [active, setActive] = React.useState<boolean>(false)
	const handleClickNavItem = ()=> {
		setActive(!active)
	}
	return (
		<li className={styles.NavItem} onClick={handleClickNavItem}>
			<span className={styles.NavItem_link} onClick={handleClickNavItem}>
				{text}
			</span>
			{active && (
				<HeaderModal otherClasses={styles.NavItem__modal}>
					{children}
				</HeaderModal>
			)}
		</li>
	)
}

export default NavItem
