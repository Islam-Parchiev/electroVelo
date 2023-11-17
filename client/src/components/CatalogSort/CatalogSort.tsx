import React from 'react'

import styles from './CatalogSort.module.scss'

const CatalogSort: React.FC = () => {
	const [open,setOpen] = React.useState<boolean>(false);
	return (
		<div className={`${styles.CatalogSort} ${open&&styles.active}`}>
			<div className={styles.CatalogSort__header} 	onClick={()=> setOpen(!open)}>
				<span>Сортировка от последнего</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="19"
					height="10"
					viewBox="0 0 19 10"
					fill="none">
					<g clip-path="url(#clip0_2114_5216)">
						<path
							d="M16.7135 6.51784L10.4135 0.499987C10.3385 0.428558 10.2572 0.378082 10.1697 0.348558C10.0822 
							0.318558 9.98848 0.303558 9.88848 0.303558C9.78848 0.303558 9.69473 0.318558 9.60723 0.348558C9.51973 
							0.378082 9.43848 0.428558 9.36348 0.499987L3.04473 6.51784C2.86973 6.68451 2.78223 6.89284 2.78223 
							7.14284C2.78223 7.39284 2.87598 7.60713 3.06348 7.7857C3.25098 7.96427 3.46973 8.05356 3.71973 
							8.05356C3.96973 8.05356 4.18848 7.96427 4.37598 7.7857L9.88848 2.5357L15.401 7.7857C15.576 7.95237 
							15.7915 8.0357 16.0475 8.0357C16.304 8.0357 16.526 7.94642 16.7135 7.76784C16.901 7.58927 16.9947 7.38094 
							16.9947 7.14284C16.9947 6.90475 16.901 6.69642 16.7135 6.51784Z"
							fill="#777777"
						/>
					</g>
					<defs>
						<clipPath id="clip0_2114_5216">
							<rect
								width="10"
								height="18"
								fill="white"
								transform="matrix(1.19249e-08 1 1 -1.19249e-08 0.888672 0)"
							/>
						</clipPath>
					</defs>
				</svg>
			</div>
			<div className={styles.CatalogSort__body}>
				<ul className={`list-reset ${styles.CatalogSort__list}`}>
					<li className={styles.CatalogSort__item}>По популярности</li>
					<li className={styles.CatalogSort__item}>По рейтингу</li>
					<li className={styles.CatalogSort__item}>Цены: по возрастанию</li>
					<li className={styles.CatalogSort__item}>Цены: по убыванию</li>
				</ul>
			</div>
		</div>
	)
}

export default CatalogSort
