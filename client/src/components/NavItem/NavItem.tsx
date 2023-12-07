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
	return (
		<li className={styles.NavItem} onClick={()=>setActive(!active)}>
			<span className={styles.NavItem_link} onClick={()=>setActive(!active)}>
				{text}
			</span>
			{active && (
				<HeaderModal otherClasses={styles.NavItem__modal}>
					{/* <ul className={`list-reset ${styles.Header__modalOne_list}`}>
						<li>
							<Link to={'/catalog'}>Горные велосипеды</Link>
						</li>
						<li>
							{' '}
							<Link to={'/catalog'}>Городские велосипеды</Link>
						</li>
						<li>
							<Link to={'/catalog'}>Шоссейные велосипеды</Link>
						</li>
						<li>
							<Link to={'/catalog'}>Гравийные велосипеды</Link>
						</li>
						<li>
							<Link to={'/catalog'}>Трековые велосипеды</Link>
						</li>

						<li>
							<Link to={'/catalog'}>Велосипеды для триатлона</Link>
						</li>
						<li>
							<Link to={'/catalog'}>Двухподвесные велосипеды</Link>
						</li>
						<li>
							<Link to={'/catalog'}>Электровелосипеды</Link>
						</li>
						<li>
							<Link to={'/catalog'}>Женские велосипеды</Link>
						</li>
						<li>
							<Link to={'/catalog'}>Детские велосипеды</Link>
						</li>
					</ul> */}
					{children}
				</HeaderModal>
			)}
		</li>
	)
}

export default NavItem
