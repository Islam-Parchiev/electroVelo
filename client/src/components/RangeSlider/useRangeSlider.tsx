import React from 'react';

import { useAppDispatch, useAppSelector } from '@redux/store';
import { changePrice } from '@redux/slices/filtersSlice'

export function useRangeSlider(value:any,step:any,min:any,max:any,onChange:any) {
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

	return {handleMaxChange,handleMinChange,minPos,maxPos,priceValue}
}
