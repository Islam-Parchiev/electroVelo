import React from 'react'

import styles from './Modal.module.scss'

interface ModalProps {
	value: boolean
	handleOpen: (value: boolean) => void
	children: React.ReactNode
}

const Modal: React.FC<ModalProps> = props => {
	const { value, handleOpen, children } = props
	return (
		<div className={styles.Modal}>
			<div className={styles.Modal__content}>
				{children}
				<button
					onClick={() => handleOpen(!value)}
					className={`btn-reset ${styles.Modal__close}`}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="26"
						height="25"
						viewBox="0 0 26 25"
						fill="none">
						<line
							x1="0.857497"
							y1="0.857835"
							x2="23.4849"
							y2="23.4853"
							stroke="#B3B3B3"
							strokeWidth="2"
						/>
						<line
							x1="23.3341"
							y1="0.707107"
							x2="0.706641"
							y2="23.3345"
							stroke="#B3B3B3"
							strokeWidth="2"
						/>
					</svg>
				</button>
			</div>
		</div>
	)
}

export default Modal
