import React from 'react'

import styles from './RangeSlider.module.scss'
import { useRangeSlider } from './useRangeSlider'

export interface RangeSliderProps {
	min: number
	max: number
	value: { min: number; max: number }
	step: number
	onChange: (value: { min: number; max: number }) => void
}

const RangeSlider: React.FC<RangeSliderProps> = props => {
	const { min, max, value, step, onChange } = props

	const { handleMaxChange, handleMinChange, minPos, maxPos, priceValue } =
		useRangeSlider(value, step, min, max, onChange)

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
	)
}

export default RangeSlider
