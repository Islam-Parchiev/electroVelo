import React from 'react'

import { useAppDispatch, useAppSelector } from '@redux/store'
import { changeCount } from '@redux/slices/productSlice'

import styles from './ProductCounter.module.scss'



const ProductCounter: React.FC = () => {
	const dispatch = useAppDispatch()
	const productCount= useAppSelector((state)=> state.product.count);
	const handleChangeCount = (count:number)=> {
		dispatch(changeCount(count))
	 }
	 if(productCount<1) {
		dispatch(changeCount(1))
	}
	return (
		<div className={styles.ProductCounter}>
			<button
				className={`btn-reset ${styles.ProductCounter__btn}`}
				onClick={() => handleChangeCount(-1)}>
				-
			</button>
			<span>{productCount}</span>
			<button
				className={`btn-reset ${styles.ProductCounter__btn}`}
				onClick={() => handleChangeCount(1)}>
				+
			</button>
		</div>
	)
}

export default ProductCounter
