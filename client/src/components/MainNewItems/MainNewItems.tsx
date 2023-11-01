import { FC,useEffect,useState } from 'react'

import Card from '../../components/Card/Card'

import styles from './MainNewItems.module.scss'
const MainNewItems: FC = () => {
// 	const [items,setItems] = useState<any>([]);

// 	useEffect(()=> {
//    async function fetchData() {
// 			const fetchD =  await fetch('http://localhost:4000/product/find?page=1&limit=3&order=DESC').then(res=> res.json());
// 		  setItems(fetchD.data);

// 		}
// 		fetchData()
// 	},[]); 
	
	// console.log(items);
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
					<Card type="primary"/>
					<Card type="primary"/>
					<Card type="primary"/>
				</ul>
			</div>
		</section>
	)
}

export default MainNewItems
