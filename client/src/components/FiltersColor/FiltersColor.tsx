import React from 'react'

import styles from './FiltersColor.module.scss'

interface FiltersColorProps {
	color:string;
	selectedColors:string[];
	changeColor:any;
}

const FiltersColor:React.FC<FiltersColorProps> = (props) => {
	const {
		color,
		selectedColors,
		changeColor,
	} = props;


	
	return (
		<li
			style={{ backgroundColor: color }}
			className={`${styles.FiltersColor} ${selectedColors.includes(color)&&styles.active}`}
			onClick={()=>changeColor(color)}></li>
	)
}

export default FiltersColor
