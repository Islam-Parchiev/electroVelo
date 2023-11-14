import React from 'react'

import SwitchCheckbox from '@components/SwitchCheckbox/SwitchCheckbox'
import Accordion from '@components/Accordion/Accordion'
import Checkbox from '@components/Checkbox/Checkbox'
import RangeSlider from '@components/RangeSlider/RangeSlider'

import { RootState, useAppDispatch } from '@redux/store'
import { useAppSelector } from '@redux/store'
import { toggleCategory,toggleAvailable } from '@redux/slices/filtersSlice';

import styles from './Filters.module.scss'

interface FiltersProps {}

const Filters: React.FC<FiltersProps> = props => {
	const dispatch = useAppDispatch();
	const selectedCategories = useAppSelector((state: RootState) => state.filters.selectedCategories);
	const availableValue = useAppSelector((state:RootState)=> state.filters.available);
	const handleCategoryToggle = (category: string) => {
		dispatch(toggleCategory(category));
	};
	const handleAvailable = (value:boolean) => {
    dispatch(toggleAvailable(value));
	}
	const [checked, setChecked] = React.useState<boolean>(false);
	const [value, setValue] = React.useState({ min: 0, max: 100 });
console.log(selectedCategories,'ssss');
console.log(availableValue,'ava');
	const [val,setVal]=React.useState(1);
	console.log(val);
	const {} = props
	return (
		<div className={styles.Filters}>
			<SwitchCheckbox
				value={availableValue}
				text="Только в наличии"
				handleClick={handleAvailable}
			/>

			<Accordion accordionTitle="Категории товара">
				<Checkbox 
					otherClass={styles.Filters__checkbox}  
					text="Велосипеды для триатлона"
					setValue={setVal}
					value={1}
					check={selectedCategories.includes('category1')}
					setCheck={() => handleCategoryToggle('category1')}
				/>
				<Checkbox 
					otherClass={styles.Filters__checkbox}  
					text="Горные велосипеды"
					setValue={setVal}
					value={2}
					check={selectedCategories.includes('category2')}
					setCheck={() => handleCategoryToggle('category2')}/>
				<Checkbox 
					otherClass={styles.Filters__checkbox}  
					text="Городские велосипеды"
					setValue={setVal}
					value={3}
					check={selectedCategories.includes('category3')}
					setCheck={() => handleCategoryToggle('category3')}/>
				<Checkbox 
					otherClass={styles.Filters__checkbox}  
					text="Гравийные велосипеды"
					setValue={setVal}
					value={4}
					check={selectedCategories.includes('category4')}
					setCheck={() => handleCategoryToggle('category4')}/>
				<Checkbox 
					otherClass={styles.Filters__checkbox}  
					text="Двухподвесные велосипеды"
					setValue={setVal}
					value={5}
					check={selectedCategories.includes('category5')}
					setCheck={() => handleCategoryToggle('category5')}/>
			</Accordion>
			<Accordion accordionTitle="Test">
				<RangeSlider min={0} max={1000} step={1} value={value} onChange={setValue} />
     	 {/* <p>The min value is: <span>{value.min}</span></p>
      	<p>The max value is: <span>{value.max}</span></p> */}
				<div className={styles.Filters__inputs}>
					<input className="input-reset" type="text" value={value.min+'H'} onChange={(e)=> setValue({...value,min:+e.target.value})} />
					-
					<input className="input-reset" type="text" value={value.min} onChange={(e)=> setValue({...value,min:+e.target.value})} />
				</div>
			</Accordion>
		</div>
	)
}

export default Filters
