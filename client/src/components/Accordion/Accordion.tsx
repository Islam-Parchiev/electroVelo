import React, { ReactNode } from 'react'

import styles from './Accordion.module.scss'

interface AccordionProps {
	accordionTitle:string;
	children:ReactNode;
}

const Accordion: React.FC<AccordionProps> = props => {
	const {
		accordionTitle,
		children,
	} = props;
	const [open,setOpen] = React.useState<boolean>(false);
	const handleClick = ()=> {
		setOpen(!open)
	}
	return (
		<div className={styles.Accordion}>
			<div className={styles.Accordion__header} onClick={handleClick}>
				<h4 className={styles.Accordion__title}>{accordionTitle}</h4>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="11"
					viewBox="0 0 18 11"
					fill="none"
					className={`${open && styles.active}`}>
					<g clip-path="url(#clip0_1972_248)">
						<path
							d="M15.8248 7.01787L9.5248 1.00002C9.4498 0.928589 9.36856 
								0.878113 9.28105 0.848589C9.19355 0.818589 9.0998 0.803589 
								8.9998 0.803589C8.89981 0.803589 8.80606 0.818589 8.71855 
								0.848589C8.63105 0.878113 8.5498 0.928589 8.4748 1.00002L2.15605 
								7.01787C1.98105 7.18454 1.89355 7.39287 1.89355 7.64287C1.89355 
								7.89287 1.9873 8.10716 2.1748 8.28573C2.3623 8.4643 2.58105 
								8.55359 2.83105 8.55359C3.08105 8.55359 3.2998 8.4643 3.4873 
								8.28573L8.99981 3.03573L14.5123 8.28573C14.6873 8.4524 14.9028 
								8.53573 15.1588 8.53573C15.4153 8.53573 15.6373 8.44645 15.8248 
								8.26787C16.0123 8.0893 16.1061 7.88097 16.1061 7.64287C16.1061 
								7.40478 16.0123 7.19645 15.8248 7.01787Z"
							fill="#777777"
						/>
					</g>
					<defs>
						<clipPath id="clip0_1972_248">
							<rect
								width="10"
								height="18"
								fill="white"
								transform="matrix(1.19249e-08 1 1 -1.19249e-08 0 0.5)"
							/>
						</clipPath>
					</defs>
				</svg>
			</div>
			<div className={`${styles.Accordion__body} ${open && styles.active}`}>
				{children}
			</div>
		</div>
	)
}

export default Accordion
