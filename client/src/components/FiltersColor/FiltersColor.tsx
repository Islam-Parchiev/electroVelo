import React from 'react'

import styles from './FiltersColor.module.scss'

interface FiltersColorProps {
	color:string;
}

const FiltersColor:React.FC<FiltersColorProps> = (props) => {
	const {
		color,
	} = props;
	const [active,setActive]=React.useState(false);
	return (
		<li
			style={{ backgroundColor: color }}
			className={`${styles.FiltersColor} ${active&&styles.active}`}
			onClick={()=>setActive(!active)}></li>
	)
}

export default FiltersColor
