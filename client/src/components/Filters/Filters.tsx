import React from 'react'

import SwitchCheckbox from '@components/SwitchCheckbox/SwitchCheckbox'
import Accordion from '@components/Accordion/Accordion'
import Checkbox from '@components/Checkbox/Checkbox'
import RangeSlider from '@components/RangeSlider/RangeSlider'
import FiltersColor from '@components/FiltersColor/FiltersColor'

import styles from './Filters.module.scss'
import { useFilters } from './useFilters'


const Filters: React.FC<{anotherClass?:string}> = ({anotherClass}) => {
	const {
		availableValue,
		handleAvailable,
		setVal,
		selectedCategories,
		handleCategoryToggle,
		priceValue,
		setValue,
		handleInputMin,
		handleInputMax,
		setSecondVal,
		brandValue,
		handleBrand,
		selectedMaterials,
		handleMaterialToggle,
		colors,
		selectedColors,
		handleColorChange,
		handleButtonReset,
	} = useFilters()
	return (
		<div className={`${styles.Filters} ${anotherClass}`}>
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
					check={selectedMaterials.includes('Aluminium')}
					setCheck={() => handleMaterialToggle('Aluminium')}
				/>
				<Checkbox
					otherClass={styles.Filters__checkbox}
					text="Карбон"
					setValue={setVal}
					value={12}
					check={selectedMaterials.includes('Carbon')}
					setCheck={() => handleMaterialToggle('Carbon')}
				/>
				<Checkbox
					otherClass={styles.Filters__checkbox}
					text="Сталь"
					setValue={setVal}
					value={13}
					check={selectedMaterials.includes('Steel')}
					setCheck={() => handleMaterialToggle('Steel')}
				/>
			</Accordion>
			<Accordion accordionTitle="Цвет">
				<ul className={`list-reset ${styles.Filters__colors}`}>
					{colors.map((color: string) => (
						<FiltersColor
							color={color}
							selectedColors={selectedColors}
							changeColor={handleColorChange}
						/>
					))}
				</ul>
			</Accordion>
			<button
				className={`btn-reset ${styles.Filters__reset}`}
				onClick={handleButtonReset}>
				Сбросить фильтры
			</button>
		</div>
	)
}

export default Filters
