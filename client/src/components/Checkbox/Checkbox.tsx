import { FC,useState } from 'react'

import styles from './Checkbox.module.scss'
interface ICheckbox {
	text:string;
	otherClass?:string;
	check?:any;
	setCheck?:any;
	value?:any;
	setValue?:any;
	count?:number;
	countClass?:string;
}
const Checkbox:FC<ICheckbox> = (props) => {
	
	const {
		text,
		otherClass='',
		value,
		setValue,
		check,
		setCheck,
		count,
		countClass,
		
	} = props;
	return (
		<label className={`${styles.customCheckbox} ${otherClass}`} onClick={()=>setValue(value)}>
			<input 
				className={styles.hiddenCheckbox} 
				type="checkbox" 
				checked={check}
				value={value}
				onChange={setCheck}/>
			<div className={styles.checkbox}>
				<svg
					className={styles.checkmark}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 25"
					fill="none">
					<rect y="0.5" width="24" height="24" rx="4" fill="#F57520" />
					<path
						d="M4.5 13L9 17.5L19 6.5"
						stroke="white"
						stroke-width="2"
					/>
				</svg>
			</div>
			<span>{text}</span>
			{
				count && <span className={countClass}>({count})</span>
			}
		</label>
	)
}

export default Checkbox
