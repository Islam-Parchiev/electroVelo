import React from 'react'

import { RootState, useAppDispatch,useAppSelector } from '@redux/store';
import { changeColor } from '@redux/slices/filtersSlice';

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


	console.log(selectedColors);
	return (
		<li
			style={{ backgroundColor: color }}
			className={`${styles.FiltersColor} ${selectedColors.includes(color)&&styles.active}`}
			onClick={()=>changeColor(color)}></li>
	)
}

export default FiltersColor
