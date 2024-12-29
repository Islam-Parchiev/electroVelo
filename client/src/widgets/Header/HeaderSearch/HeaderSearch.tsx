import React from 'react'

import styles from './HeaderSearch.module.scss'

const HeaderSearch: React.FC = () => {
	return (
		<label className={styles.HeaderSearch}>
			<input type="text" className={'input-reset'} placeholder="Поиск" />
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none">
				<path
					d="M16 10.5C16 14.6421 12.6421 18 8.5 18C4.35786 18 1 14.6421 1 10.5C1 6.35786 4.35786 3 8.5 3C12.6421 3 16 6.35786 16 10.5Z"
					stroke="#777777"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M17.9999 19.9999L13.8032 15.8032"
					stroke="#777777"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</label>
	)
}

export default HeaderSearch
