import React from 'react'

import styles from './FooterContacts.module.scss'


const FooterContacts: React.FC= () => {
	return (
		<div className={styles.FooterContacts}>
			<h4 className={styles.FooterContacts__title}>Контакты</h4>
			<ul className={`list-reset ${styles.FooterContacts__list}`}>
				<li className={styles.FooterContacts__item}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="33"
						height="32"
						viewBox="0 0 33 32"
						fill="none">
						<path
							d="M19.3333 4H8.66667C7.19391 4 6 5.19391 6 6.66667V25.3333C6 26.8061 7.19391 28 
						8.66667 28H19.3333C20.8061 28 22 26.8061 22 25.3333V6.66667C22 5.19391 20.8061 4 
						19.3333 4Z"
							stroke="#4C4C4C"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M14 24.0133V24"
							stroke="#4C4C4C"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					<div>
						<a href="/">+7(495)055-75-86</a>
						<a href="/">+7(495)055-75-86</a>
					</div>
				</li>
				<li className={styles.FooterContacts__item}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="33"
						height="32"
						viewBox="0 0 33 32"
						fill="none">
						<g clipPath="url(#clip0_1926_501)">
							<path
								d="M21.4038 29.8148L24.6542 5.51823L5.23796 20.4815L15.3209 21.684L21.4038 29.8148Z"
								stroke="#4C4C4C"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</g>
						<defs>
							<clipPath id="clip0_1926_501">
								<rect
									width="32"
									height="32"
									fill="white"
									transform="translate(0.666504)"
								/>
							</clipPath>
						</defs>
					</svg>

					<address>г. Москва, ул. Доватора, 7/8 с1</address>
				</li>
				<li className={styles.FooterContacts__item}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="33"
						height="32"
						viewBox="0 0 33 32"
						fill="none">
						<path
							d="M28.6667 6.66699H7.33333C6.96515 6.66699 6.63181 6.81623 6.39052 7.05751C6.14924 7.29881
						 6 7.63214 6 8.00033V24.0003C6 24.7367 6.59696 25.3337 7.33333 25.3337H28.6667C29.4031 25.3337 
						 30 24.7367 30 24.0003V8.00033C30 7.63214 29.8508 7.29881 29.6095 7.05751C29.3681 6.81623 
						 29.0348 6.66699 28.6667 6.66699Z"
							stroke="#4C4C4C"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M6.39062 7.05762L16.1145 16.7814C17.1558 17.8229 18.8444 17.8229 19.8857 16.7814L29.6096 7.05762"
							stroke="#4C4C4C"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					<a href="/">order@world-bike.ru</a>
				</li>
			</ul>
		</div>
	)
}

export default FooterContacts
