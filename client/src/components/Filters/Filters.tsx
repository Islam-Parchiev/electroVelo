import React from 'react'

import SwitchCheckbox from '@components/SwitchCheckbox/SwitchCheckbox'
import Accordion from '@components/Accordion/Accordion'
import Checkbox from '@components/Checkbox/Checkbox'
import RangeSlider from '@components/RangeSlider/RangeSlider'
import FiltersColor from '@components/FiltersColor/FiltersColor'

import { RootState, useAppDispatch } from '@redux/store'
import { useAppSelector } from '@redux/store'
import { toggleCategory, toggleAvailable } from '@redux/slices/filtersSlice'

import styles from './Filters.module.scss'

interface FiltersProps {}

const Filters: React.FC<FiltersProps> = props => {
	const dispatch = useAppDispatch()
	const selectedCategories = useAppSelector(
		(state: RootState) => state.filters.selectedCategories,
	)
	const availableValue = useAppSelector((state: RootState) => state.filters.available)
	const handleCategoryToggle = (category: string) => {
		dispatch(toggleCategory(category))
	}
	const handleAvailable = (value: boolean) => {
		dispatch(toggleAvailable(value))
	}
	const [checked, setChecked] = React.useState<boolean>(false)
	const [value, setValue] = React.useState({ min: 0, max: 100 })
	console.log(selectedCategories, 'ssss')
	console.log(availableValue, 'ava')
	const [val, setVal] = React.useState(1)
	console.log(val)
	const colors = ['#F2F1EF','#38D5C8','#ACB690','#CC7E3B',
		'#740222','#44ACFB','#FEF95F','#0D7F19','#FFD536',
		'#FE7E56','#AC632C','#FD0012','#25FD3C','#353839','#FEA32A','#E5E4E2',
		'#79526F','#FEC0CB','#BDBDBD','#7F7F7F','#0026F9','#49423D','#061E42',
		'#8926F9','#000'];
	const {} = props
	return (
		<div className={styles.Filters}>
			<SwitchCheckbox
				value={availableValue}
				text="Только в наличии"
				handleClick={handleAvailable}
				otherClass={styles.Filters__switchCheckbox}
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
					setCheck={() => handleCategoryToggle('category2')}
				/>
				<Checkbox
					otherClass={styles.Filters__checkbox}
					text="Городские велосипеды"
					setValue={setVal}
					value={3}
					check={selectedCategories.includes('category3')}
					setCheck={() => handleCategoryToggle('category3')}
				/>
				<Checkbox
					otherClass={styles.Filters__checkbox}
					text="Гравийные велосипеды"
					setValue={setVal}
					value={4}
					check={selectedCategories.includes('category4')}
					setCheck={() => handleCategoryToggle('category4')}
				/>
				<Checkbox
					otherClass={styles.Filters__checkbox}
					text="Двухподвесные велосипеды"
					setValue={setVal}
					value={5}
					check={selectedCategories.includes('category5')}
					setCheck={() => handleCategoryToggle('category5')}
				/>
			</Accordion>
			<Accordion accordionTitle="Цена">
				<RangeSlider
					min={0}
					max={1000000}
					step={1}
					value={value}
					onChange={setValue}
				/>
				{/* <p>The min value is: <span>{value.min}</span></p>
      	<p>The max value is: <span>{value.max}</span></p> */}
				<div className={styles.Filters__inputs}>
					<label className={styles.Filters__input}>
						<input
							className="input-reset"
							type="text"
							value={value.min}
							onChange={e =>
								setValue({ ...value, min: +e.target.value })
							}
						/>
						<span>₽</span>
					</label>

					<span className={styles.Filters__inputs_divider}>-</span>

					<label className={styles.Filters__input}>
						<input
							className="input-reset"
							type="text"
							value={value.max}
							onChange={e =>
								setValue({ ...value, max: +e.target.value })
							}
						/>
						<span>₽</span>
					</label>
				</div>
			</Accordion>
			<Accordion accordionTitle="Бренд">
				<Checkbox
					otherClass={styles.Filters__checkbox}
					text="Bianci"
					setValue={setVal}
					value={1}
					check={selectedCategories.includes('category1')}
					setCheck={() => handleCategoryToggle('category1')}
				/>
				<Checkbox
					otherClass={styles.Filters__checkbox}
					text="BMC"
					setValue={setVal}
					value={1}
					check={selectedCategories.includes('category1')}
					setCheck={() => handleCategoryToggle('category1')}
				/>
				<Checkbox
					otherClass={styles.Filters__checkbox}
					text="Ciclistino"
					setValue={setVal}
					value={1}
					check={selectedCategories.includes('category1')}
					setCheck={() => handleCategoryToggle('category1')}
				/>
				<Checkbox
					otherClass={styles.Filters__checkbox}
					text="Cipollini"
					setValue={setVal}
					value={1}
					check={selectedCategories.includes('category1')}
					setCheck={() => handleCategoryToggle('category1')}
				/>
				<Checkbox
					otherClass={styles.Filters__checkbox}
					text="Colnago"
					setValue={setVal}
					value={1}
					check={selectedCategories.includes('category1')}
					setCheck={() => handleCategoryToggle('category1')}
					count={2}
					countClass={styles.Filters__checkbox_count}
				/>
			</Accordion>
			<Accordion accordionTitle="Материал рамы">
				<Checkbox
					otherClass={styles.Filters__checkbox}
					text="Алюминий"
					setValue={setVal}
					value={1}
					check={selectedCategories.includes('category1')}
					setCheck={() => handleCategoryToggle('category1')}
				/>
				<Checkbox
					otherClass={styles.Filters__checkbox}
					text="Карбон"
					setValue={setVal}
					value={1}
					check={selectedCategories.includes('category1')}
					setCheck={() => handleCategoryToggle('category1')}
				/>
				<Checkbox
					otherClass={styles.Filters__checkbox}
					text="Сталь"
					setValue={setVal}
					value={1}
					check={selectedCategories.includes('category1')}
					setCheck={() => handleCategoryToggle('category1')}
				/>
			</Accordion>
			<Accordion accordionTitle="Цвет">
				<ul className={`list-reset ${styles.Filters__colors}`}>

					{colors.map((color:any)=> (<FiltersColor color={color}/>) )}
					{/* <li
						style={{ backgroundColor: '#F2F1EF' }}
						className={`${styles.Filters__colors_item} ${styles.active}`}></li> */}
					{/* <li
						style={{ backgroundColor: '#F2F1EF' }}
						className={styles.Filters__colors_item}></li>
					<li
						style={{ backgroundColor: '#F2F1EF' }}
						className={styles.Filters__colors_item}></li>
					<li
						style={{ backgroundColor: '#F2F1EF' }}
						className={styles.Filters__colors_item}></li>
					<li
						style={{ backgroundColor: '#F2F1EF' }}
						className={styles.Filters__colors_item}></li>
					<li
						style={{ backgroundColor: '#F2F1EF' }}
						className={styles.Filters__colors_item}></li>

					<li
						style={{ backgroundColor: '#F2F1EF' }}
						className={styles.Filters__colors_item}></li>
					<li
						style={{ backgroundColor: '#F2F1EF' }}
						className={styles.Filters__colors_item}></li> */}
				</ul>
			</Accordion>
		</div>
	)
}

export default Filters
