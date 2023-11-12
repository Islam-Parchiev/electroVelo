import React from 'react'

import SwitchCheckbox from '@components/SwitchCheckbox/SwitchCheckbox'
import Accordion from '@components/Accordion/Accordion'
import Checkbox from '@components/Checkbox/Checkbox'

import styles from './Filters.module.scss'

interface FiltersProps {}

const Filters: React.FC<FiltersProps> = props => {
	
	const [checked, setChecked] = React.useState<boolean>(false);

	const [val,setVal]=React.useState(1);
	console.log(val);
	const {} = props
	return (
		<div className={styles.Filters}>
			<SwitchCheckbox
				value={checked}
				text="Только в наличии"
				handleClick={setChecked}
			/>

			<Accordion accordionTitle="Категории товара">
				<Checkbox 
					otherClass={styles.Filters__checkbox}  
					text="Велосипеды для триатлона"
					setValue={setVal}
					value={1}
				/>
				<Checkbox 
					otherClass={styles.Filters__checkbox}  
					text="Горные велосипеды"
					setValue={setVal}
					value={2}/>
				<Checkbox 
					otherClass={styles.Filters__checkbox}  
					text="Городские велосипеды"
					setValue={setVal}
					value={3}/>
				<Checkbox 
					otherClass={styles.Filters__checkbox}  
					text="Гравийные велосипеды"
					setValue={setVal}
					value={4}/>
				<Checkbox 
					otherClass={styles.Filters__checkbox}  
					text="Двухподвесные велосипеды"
					setValue={setVal}
					value={5}/>
			</Accordion>
		</div>
	)
}

export default Filters
