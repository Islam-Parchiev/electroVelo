import React from 'react'

import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'

import { changePrice } from '../../../entities/Filters/model/filtersSlice'

interface IReturnDataUseRangeSlider {
	handleMaxChange: (value: React.ChangeEvent<HTMLInputElement>) => void
	handleMinChange: (value: React.ChangeEvent<HTMLInputElement>) => void
	minPos: number
	maxPos: number
	priceValue: {
		min: number
		max: number
	}
}

export function useRangeSlider(
	value: { min: number; max: number },
	step: number,
	min: number,
	max: number,
	onChange: (value: { min: number; max: number }) => void,
): IReturnDataUseRangeSlider {
	const dispatch = useAppDispatch()
	const priceValue = useAppSelector(state => state.filters.price)
	console.log(priceValue, 'slicePrice')
	const [minValue, setMinValue] = React.useState(priceValue.min)
	const [maxValue, setMaxValue] = React.useState(priceValue.max)

	React.useEffect(() => {
		if (value) {
			setMinValue(priceValue.min)
			setMaxValue(priceValue.max)
		}
	}, [value])

	const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		const newMinVal = Math.min(+e.target.value, maxValue - step)
		if (!value) setMinValue(newMinVal)
		onChange({ min: priceValue.min, max: priceValue.max })
		dispatch(changePrice({ min: newMinVal, max: maxValue }))
	}

	const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		const newMaxVal = Math.max(+e.target.value, minValue + step)
		if (!value) setMaxValue(newMaxVal)
		onChange({ min: priceValue.min, max: priceValue.max })
		dispatch(changePrice({ min: minValue, max: newMaxVal }))
	}

	const minPos = ((minValue - min) / (max - min)) * 100
	const maxPos = ((maxValue - min) / (max - min)) * 100

	return { handleMaxChange, handleMinChange, minPos, maxPos, priceValue }
}
