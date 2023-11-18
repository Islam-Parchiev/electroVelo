import React from 'react'

import styles from './CatalogView.module.scss'

interface CatalogViewProps {}

const CatalogView: React.FC<CatalogViewProps> = props => {
	const [viewType,setViewType] = React.useState(1);
	const {} = props
	return (
		<ul className={`list-reset ${styles.CatalogView}`}>
			<li onClick={() => setViewType(1)}>
				<svg
					width="23"
					height="23"
					viewBox="0 0 28 28"
					xmlns="http://www.w3.org/2000/svg"
					className={viewType === 1 ? styles.active : ''}>
					<rect
						x="0.5"
						y="0.5"
						width="7"
						height="7"
						rx="2.5"
						stroke="#4C4C4C"
					/>
					<rect
						x="10.0"
						y="0.5"
						width="7"
						height="7"
						rx="2.5"
						stroke="#4C4C4C"
					/>
					<rect
						x="20.0"
						y="0.5"
						width="7"
						height="7"
						rx="2.5"
						stroke="#4C4C4C"
					/>
					<rect
						x="0.5"
						y="10.0"
						width="7"
						height="7"
						rx="2.5"
						stroke="#4C4C4C"
					/>
					<rect
						x="10.0"
						y="10.0"
						width="7"
						height="7"
						rx="2.5"
						stroke="#4C4C4C"
					/>
					<rect
						x="20.0"
						y="10.0"
						width="7"
						height="7"
						rx="2.5"
						stroke="#4C4C4C"
					/>
					<rect
						x="0.5"
						y="20.0"
						width="7"
						height="7"
						rx="2.5"
						stroke="#4C4C4C"
					/>
					<rect
						x="10.0"
						y="20.0"
						width="7"
						height="7"
						rx="2.5"
						stroke="#4C4C4C"
					/>
					<rect
						x="20.0"
						y="20.0"
						width="7"
						height="7"
						rx="2.5"
						stroke="#4C4C4C"
					/>
				</svg>
			</li>
			<li onClick={() => setViewType(2)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="23"
					viewBox="0 0 23 23"
					className={viewType === 2 ? styles.active : ''}>
					<rect
						x="0.5"
						y="0.5"
						width="10"
						height="10"
						rx="2.5"
						stroke="#4C4C4C"
					/>
					<rect
						x="0.5"
						y="12.5"
						width="10"
						height="10"
						rx="2.5"
						stroke="#4C4C4C"
					/>
					<rect
						x="12.5"
						y="0.5"
						width="10"
						height="10"
						rx="2.5"
						stroke="#4C4C4C"
					/>
					<rect
						x="12.5"
						y="12.5"
						width="10"
						height="10"
						rx="2.5"
						stroke="#4C4C4C"
					/>
				</svg>
			</li>
		</ul>
	)
}

export default CatalogView
