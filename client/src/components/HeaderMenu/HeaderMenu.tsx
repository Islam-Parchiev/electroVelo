import React from 'react'

import styles from './HeaderMenu.module.scss'

interface HeaderMenuProps {
	value?:boolean;
	handleOpen?:any;
}

const HeaderMenu:React.FC<HeaderMenuProps> = (props) => {
	const {
		handleOpen,
	} = props;
	const menuRef=React.useRef<HTMLDivElement>(null);


	// TODO:Найти другие варианты решения вместо прямой работы с DOM
	React.useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			// @ts-ignore
			if (menuRef.current && !menuRef.current.contains(event.target)) {		
				handleOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
		// eslint-disable-next-line
	}, [menuRef])
	React.useEffect(() => {
		document.body.style.overflow = 'hidden'
		document.body.style.paddingRight='16px'
		return () => {
			document.body.style.overflow = 'unset'
			document.body.style.paddingRight='0px'
		}
	}, [])

	return (
		<div className={styles.HeaderMenu} >
			<div className={styles.HeaderMenu__content} ref={menuRef}>
				
				<button className={`btn-reset ${styles.HeaderMenu__btn}`} onClick={()=>handleOpen(false)}>
					<svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
						<line x1="0.857497" y1="0.857865" x2="23.4849" y2="23.4853" stroke="#B3B3B3" stroke-width="2"/>
						<line x1="23.3341" y1="0.707107" x2="0.706641" y2="23.3345" stroke="#B3B3B3" stroke-width="2"/>
					</svg>
				</button>
				<h2 className={styles.HeaderMenu__title}>Доп. Информация</h2>
				<ul className={`list-reset ${styles.HeaderMenu__list}`}>
					<li className={styles.HeaderMenu__item}>
						<a href="/">О нас</a>
					</li>
					<li className={styles.HeaderMenu__item}>
						<a href="/">О нас</a>
					</li>
					<li className={styles.HeaderMenu__item}>
						<a href="/">О нас</a>
					</li>

					<li className={styles.HeaderMenu__item}>
						<a href="/">О нас</a>
					</li>
					<li className={styles.HeaderMenu__item}>
						<a href="/">О нас</a>
					</li>
					<li className={styles.HeaderMenu__item}>
						<a href="/">О нас</a>
					</li>
					<li className={styles.HeaderMenu__item}>
						<a href="/">О нас</a>
					</li>
					<li className={styles.HeaderMenu__item}>
						<a href="/">О нас</a>
					</li>
					
				</ul>

			</div>
			
		</div>
	)
}

export default HeaderMenu
