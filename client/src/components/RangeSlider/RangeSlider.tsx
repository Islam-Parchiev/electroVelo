import React from 'react'

import { useAppDispatch, useAppSelector } from '@redux/store'
import { changePrice } from '@redux/slices/filtersSlice'

import styles from './RangeSlider.module.scss'

interface RangeSliderProps {
	min:any
	 max:any
	  value:any
		 step:any 
		 onChange:any
}

const RangeSlider:React.FC<RangeSliderProps> = (props) => {
	const {
		min,
		 max,
		  value,
		step, 
		onChange,
	} = props;

	const dispatch = useAppDispatch();
	const priceValue = useAppSelector((state)=>state.filters.price);
console.log(priceValue,'slicePrice');
	const [minValue, setMinValue] = React.useState(priceValue.min);
	const [maxValue, setMaxValue] = React.useState(priceValue.max);
	
	React.useEffect(() => {
		if (value) {
			setMinValue(priceValue.min);
			setMaxValue(priceValue.max);
		}
	}, [value]);
	
	const handleMinChange = (e:any) => {
		e.preventDefault();
		const newMinVal = Math.min(+e.target.value, maxValue - step);
		if (!value) setMinValue(newMinVal);
		onChange({ min: priceValue.min, max: priceValue.max });
		dispatch(changePrice({min:newMinVal,max: maxValue}));
	};
	
	const handleMaxChange = (e:any) => {
		e.preventDefault();
		const newMaxVal = Math.max(+e.target.value, minValue + step);
		if (!value) setMaxValue(newMaxVal);
		onChange({ min: priceValue.min, max: priceValue.max });
		dispatch(changePrice({min:minValue,max: newMaxVal}));
	};
	
	const minPos = ((minValue - min) / (max - min)) * 100;
	const maxPos = ((maxValue - min) / (max - min)) * 100;

		
	return (
		<div className={styles.wrapper}>
			<div className={styles.inputWrapper}>
				<input
					className={styles.input}
					type="range"
					value={priceValue.min}
					min={min}
					max={max}
					step={step}
					onChange={handleMinChange}
				/>
				<input
					className={styles.input}
					type="range"
					value={priceValue.max}
					min={min}
					max={max}
					step={step}
					onChange={handleMaxChange}
				/>
			</div>
		
			<div className={styles.controlWrapper}>
				<div className={styles.control} style={{ left: `${minPos}%` }} />
				<div className={styles.rail}>
					<div
						className={styles.innerRail} 
						style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
					/>
				</div>
				<div className={styles.control} style={{ left: `${maxPos}%` }} />
			</div>
		</div>
	);
};


export default RangeSlider
