import React from 'react'

import { Link } from 'react-router-dom';

import styles from './Breadcrumbs.module.scss'

interface BreadcrumbsProps {
	paths:string[];
	color:'l'|'b';
}
const recipeMap = new Map([
  	['Главная', '/'],
 		 ['Велосипеды', '/catalog'],
  	['Горные велосипеды', '/catalog'],
]);
const Breadcrumbs:React.FC<BreadcrumbsProps> = (props) => {
	const {paths,color} = props;
	return (
		<ul className={`list-reset ${styles.Breadcrumbs}`}>
			{paths.map((path,i)=> <li key={i} className={`${styles.Breadcrumbs__item} ${color==='b'?styles.b:styles.l}`}>
				{/* @ts-ignore */}
				<Link to={recipeMap.get(path)} >{path}</Link>
			</li>)}
		</ul>
	)
}

export default Breadcrumbs
