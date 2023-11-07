import { FC } from 'react'
import { useQuery } from '@tanstack/react-query'

import productService from '../../services/product.service';
import Card from '../../components/Card/Card'

import styles from './MainNewItems.module.scss'
const MainNewItems: FC = () => {

	const {data} = useQuery({ queryKey: ['products'], queryFn:()=> productService.getProductsByLimit(3)  })
	console.log(data?.data);
	return (
		<section className={styles.MainNewItems}>
			<div className={`container ${styles.MainNewItems__container}`}>
				<h2 className="title">Новинки</h2>
				<ul className={`list-reset ${styles.MainNewItems__cards}`}>
			 
			 {/* {
				items.map((item:any)=>(
					
					<Card type="primary" price={item.price} title={item.title} available={item.available} images={item.images}/>
				))
			 } */}
			 {
				data?.data.map((item:any)=>(
					<Card type="primary" price={item.price} title={item.title} available={item.available} images={item.images[0].srcPath}/>
				))
			 }
					{/* <Card type="primary"/>
					<Card type="primary"/>
					<Card type="primary"/> */}
				</ul>
			</div>
		</section>
	)
}

export default MainNewItems
