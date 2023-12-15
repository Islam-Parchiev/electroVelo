import React from 'react'

import { Link } from 'react-router-dom'

import NavItem from '@components/NavItem/NavItem'

import styles from './HeaderNav.module.scss'

interface HeaderNavProps {}

const HeaderNav: React.FC<HeaderNavProps> = props => {
	const {} = props
	return (
		<nav className={styles.HeaderNav}>
			<ul className={`list-reset ${styles.HeaderNav_list}`}>
				<li className={styles.HeaderNav_item}>
					<Link to="/" className={styles.HeaderNav_link}>
						Trade in
					</Link>
				</li>
				<NavItem text="Велосипеды">
					<ul className={`list-reset ${styles.HeaderNav__modalOne_list}`}>
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
					</ul>
				</NavItem>
				<NavItem text="Запчасти">
					<ul className={`list-reset ${styles.HeaderNav__modalOne_list}`}>
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
					</ul>
				</NavItem>
				<NavItem text="Экипировка">
					<ul className={`list-reset ${styles.HeaderNav__modalOne_list}`}>
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
					</ul>
				</NavItem>
				<NavItem text="Аксессуары">
					<ul className={`list-reset ${styles.HeaderNav__modalOne_list}`}>
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
					</ul>
				</NavItem>
				<NavItem text="Велостанки">
					<ul className={`list-reset ${styles.HeaderNav__modalOne_list}`}>
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
					</ul>
				</NavItem>
			</ul>
		</nav>
	)
}

export default HeaderNav
