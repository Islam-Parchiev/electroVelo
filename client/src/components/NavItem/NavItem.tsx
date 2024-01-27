import React from 'react'

import HeaderModal from '@components/HeaderModal/HeaderModal'

import styles from './NavItem.module.scss'

interface NavItemProps {
	children:React.ReactNode;
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
	const menuRef = React.useRef<HTMLLIElement>(null)

	React.useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			// @ts-ignore
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setActive(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
		// eslint-disable-next-line
	}, [menuRef])

	return (
		<li ref={menuRef} className={styles.NavItem} onClick={handleClickNavItem}>
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
