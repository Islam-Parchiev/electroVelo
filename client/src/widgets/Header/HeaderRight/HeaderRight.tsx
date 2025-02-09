import React from 'react'

import { Link } from 'react-router-dom'

import HeaderSearch from './../HeaderSearch/HeaderSearch'

import styles from './HeaderRight.module.scss'

interface HeaderRightProps {
	setSearch: (value: boolean) => void
	search: boolean
	setProfileMenu: (value: boolean) => void
	profileMenu: boolean
	setMenu: (value: boolean) => void
	menu: boolean
}

const HeaderRight: React.FC<HeaderRightProps> = props => {
	const { setSearch, search, setProfileMenu, profileMenu, setMenu, menu } = props
	return (
		<div className={styles.HeaderRight}>
			<ul className={`list-reset ${styles.HeaderRight__list}`}>
				<li className={styles.HeaderRight__item}>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						onClick={() => setSearch(!search)}>
						<path
							d="M16 10.5C16 14.6421 12.6421 18 8.5 18C4.35786 18 1 14.6421 1 10.5C1 6.35786 4.35786 3 8.5 3C12.6421 3 16 6.35786 
16 10.5Z"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M17.9999 20L13.8032 15.8033"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					{search && <HeaderSearch />}
				</li>
				<li className={styles.HeaderRight__item}>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						onClick={() => setProfileMenu(!profileMenu)}>
						<path
							d="M14 15H6C3.79086 15 2 16.7909 2 19V21H10H18V19C18 16.7909 16.2091 15 14 15Z"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M10 11C12.2091 11 14 9.20914 14 7C14 4.79086 12.2091 3 10 3C7.79086 3 6 4.79086 6 7C6 9.20914 7.79086 11 10 11Z"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</li>
				<li className={styles.HeaderRight__item}>
					<Link to="/profile/favorites">
						<svg
							width="20"
							height="18"
							viewBox="0 0 20 18"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M2.3314 9.0474L10 17L17.6686 9.0474C18.5211 8.1633 19 6.96429 19 5.71405C19 3.11055 16.9648 1 
						14.4543 1C13.2487 1 12.0925 1.49666 11.24 2.38071L10 3.66667L8.76 2.38071C7.90749 1.49666 6.75128 
						1 5.54569 1C3.03517 1 1 3.11055 1 5.71405C1 6.96429 1.47892 8.1633 2.3314 9.0474Z"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</Link>
				</li>
				<li className={styles.HeaderRight__item}>
					<Link to="/cart">
						<svg
							width="21"
							height="20"
							viewBox="0 0 21 20"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M16 15H5.5L3.5 1H1"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M3.78564 3H19.9999L16.9999 12H5.07135"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M8 19C9.1046 19 10 18.1046 10 17C10 15.8954 9.1046 15 8 15C6.89543 15 6 15.8954 6 17C6 18.1046 6.89543 19 8 19Z"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M16 19C17.1046 19 18 18.1046 18 17C18 15.8954 17.1046 15 16 15C14.8954 15 14 15.8954 14 17C14 18.1046 14.8954 19 16 19Z"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</Link>
				</li>
			</ul>

			<div className={styles.HeaderRight__burger} onClick={() => setMenu(!menu)}>
				<span>.</span>
				<span>.</span>
				<span>.</span>
			</div>
		</div>
	)
}

export default HeaderRight
