import React from 'react'

import styles from './SwitchCheckbox.module.scss'

interface SwitchCheckboxProps {
	text:string;
	value:boolean;
	handleClick:(value:boolean)=>void;

}

const SwitchCheckbox:React.FC<SwitchCheckboxProps> = (props) => {
	const {
		text,
		value,
		handleClick,
	} = props;
console.log(value);
	return (
		<label className={styles.switchCheckbox}>
			<span className={styles.switchCheckbox__text}>
				{text}
			</span>
			<input type="checkbox" checked={value} onClick={()=> handleClick(!value)}/>
			<span className={styles.switchCheckbox__switch}></span>
		</label>
	)
}

export default SwitchCheckbox
