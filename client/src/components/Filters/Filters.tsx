import React from 'react'

import SwitchCheckbox from '@components/SwitchCheckbox/SwitchCheckbox'
import Accordion from '@components/Accordion/Accordion'
import Checkbox from '@components/Checkbox/Checkbox'
import RangeSlider from '@components/RangeSlider/RangeSlider'
import FiltersColor from '@components/FiltersColor/FiltersColor'

import { RootState, useAppDispatch,useAppSelector } from '@redux/store'
import { changeCategory, toggleAvailable,changeBrand,changePrice,changeMaterial, changeColor,resetFilters } from '@redux/slices/filtersSlice'

import styles from './Filters.module.scss'

interface FiltersProps {}

const Filters: React.FC<FiltersProps> = props => {
	const dispatch = useAppDispatch()
	const selectedCategories = useAppSelector(
		(state: RootState) => state.filters.selectedCategories,
	)
	console.log(selectedCategories);
	const selectedColors = useAppSelector((state:RootState)=>state.filters.selectedColors)
	
	const availableValue = useAppSelector((state: RootState) => state.filters.available)
	const brandValue=useAppSelector((state:RootState)=>state.filters.selectedBrands)
	const priceValue = useAppSelector((state:RootState)=> state.filters.price)
	const selectedMaterials = useAppSelector((state:RootState)=> state.filters.selectedMaterials);
	const handleCategoryToggle = (category: string) => {
		dispatch(changeCategory(category))
	}
	const handleColorChange = (color:string)=> {
		dispatch(changeColor(color));
	 }
	const handleMaterialToggle=(material:string)=> {
		dispatch(changeMaterial(material));
	}
	const handleAvailable = (value: boolean) => {
		dispatch(toggleAvailable(value))
	}
	const handleBrand=(value:string)=> {
		dispatch(changeBrand(value))
	}
	const handleInputMin=(e:any)=> {
		e.preventDefault(); 
		setValue({ ...value, min: +e.target.value })
		dispatch(changePrice({...priceValue,min:+e.target.value}));
	}
	const handleInputMax=(e:any)=> {
		e.preventDefault(); 
		setValue({ ...value, max: +e.target.value })
		dispatch(changePrice({...priceValue,max:+e.target.value}));
	}
	const handleButtonReset = ()=> {
		dispatch(resetFilters({
			available:false,
			selectedCategories:[],
			price:{
				min:0,
				max:1000000,
			},
			selectedBrands:[],
			selectedMaterials:[],
			selectedColors:[],
		}))
	}
	const [value, setValue] = React.useState({ min: priceValue.min, max: priceValue.max })
	const [val, setVal] = React.useState(1);
	const [secondVal,setSecondVal]=React.useState(1);
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
					check={selectedCategories.includes('Triatlone')}
					setCheck={() => handleCategoryToggle('Triatlone')}
				/>
				<Checkbox
					otherClass={styles.Filters__checkbox}
					text="Горные велосипеды"
					setValue={setVal}
					value={2}
					check={selectedCategories.includes('Mountain')}
					setCheck={() => handleCategoryToggle('Mountain')}
				/>
				<Checkbox
					otherClass={styles.Filters__checkbox}
					text="Городские велосипеды"
					setValue={setVal}
					value={3}
					check={selectedCategories.includes('City')}
					setCheck={() => handleCategoryToggle('City')}
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
					value={priceValue}
					onChange={setValue}
				/>
				{/* <p>The min value is: <span>{value.min}</span></p>
      	<p>The max value is: <span>{value.max}</span></p> */}
				<div className={styles.Filters__inputs}>
					<label className={styles.Filters__input}>
						<input
							className="input-reset"
							type="text"
							value={priceValue.min}
							onChange={handleInputMin}
						/>
						<span>₽</span>
					</label>

					<span className={styles.Filters__inputs_divider}>-</span>

					<label className={styles.Filters__input}>
						<input
							className="input-reset"
							type="text"
							value={priceValue.max}
							onChange={handleInputMax}
						/>
						<span>₽</span>
					</label>
				</div>
			</Accordion>
			<Accordion accordionTitle="Бренд">
				<Checkbox
					otherClass={styles.Filters__checkbox}
					text="Bianci"
					setValue={setSecondVal}
					value={6}
					check={brandValue.includes('brand1')}
					setCheck={() => handleBrand('brand1')}
				/>
				<Checkbox
					otherClass={styles.Filters__checkbox}
					text="BMC"
					setValue={setSecondVal}
					value={7}
					check={brandValue.includes('brand2')}
					setCheck={() => handleBrand('brand2')}
				/>
				<Checkbox
					otherClass={styles.Filters__checkbox}
					text="Ciclistino"
					setValue={setSecondVal}
					value={8}
					check={brandValue.includes('brand3')}
					setCheck={() => handleBrand('brand3')}
				/>
				<Checkbox
					otherClass={styles.Filters__checkbox}
					text="Cipollini"
					setValue={setSecondVal}
					value={9}
					check={brandValue.includes('brand4')}
					setCheck={() => handleBrand('brand4')}
				/>
				<Checkbox
					otherClass={styles.Filters__checkbox}
					text="Colnago"
					setValue={setSecondVal}
					value={10}
					check={brandValue.includes('brand5')}
					setCheck={() => handleBrand('brand5')}
					count={2}
					countClass={styles.Filters__checkbox_count}
				/>
			</Accordion>
			<Accordion accordionTitle="Материал рамы">
				<Checkbox
					otherClass={styles.Filters__checkbox}
					text="Алюминий"
					setValue={setVal}
					value={11}
					check={selectedMaterials.includes('aluminium')}
					setCheck={() => handleMaterialToggle('aluminium')}
				/>
				<Checkbox
					otherClass={styles.Filters__checkbox}
					text="Карбон"
					setValue={setVal}
					value={12}
					check={selectedMaterials.includes('carbon')}
					setCheck={() => handleMaterialToggle('carbon')}
				/>
				<Checkbox
					otherClass={styles.Filters__checkbox}
					text="Сталь"
					setValue={setVal}
					value={13}
					check={selectedMaterials.includes('steel')}
					setCheck={() => handleMaterialToggle('steel')}
				/>
			</Accordion>
			<Accordion accordionTitle="Цвет">
				<ul className={`list-reset ${styles.Filters__colors}`}>

					{colors.map((color:any)=> (<FiltersColor color={color} selectedColors={selectedColors} changeColor={handleColorChange}/>) )}
				
				</ul>
			</Accordion>
			<button className={`btn-reset ${styles.Filters__reset}`} onClick={handleButtonReset}>
			Сбросить фильтры
			</button>
		</div>
	)
}

export default Filters
