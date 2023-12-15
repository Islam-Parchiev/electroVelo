import React from 'react'

import { ICard } from 'Card';

import { useAppDispatch, useAppSelector } from '@redux/store';
import { changeColor } from '@redux/slices/productSlice';

import styles from './ProductColors.module.scss'

interface ProductColorsProps {
	loading:any;
	success:any;
	product:ICard;
}

const ProductColors: React.FC<ProductColorsProps> = props => {
	const {
		loading,
		success,
		product,
	} = props;
	const productColor= useAppSelector((state)=> state.product.color);
	
	const dispatch = useAppDispatch();
	const handleClickColor = (color:string) =>{
		dispatch(changeColor(color))
	 }

	 React.useEffect(()=>{
		dispatch(changeColor(success&&product&&product.colors&&product.colors[0].color))
	 },[])
	return (
		<div className={styles.ProductColors}>
			<h3>Цвет:</h3>
			<ul className={`list-reset ${styles.ProductColors__list}`}>
				{loading
					? 'Loading...'
					: success
						? product.colors?.map(color => (
							<li
								style={{
									backgroundColor: color.hexColor,
								}}
								className={`${styles.ProductColors__item} ${
									color.color === productColor && styles.active
								}`}
								onClick={() =>
									handleClickColor(color.color)
								}></li>
					  ))
						: 'Error'}
			</ul>
		</div>
	)
}

export default ProductColors
