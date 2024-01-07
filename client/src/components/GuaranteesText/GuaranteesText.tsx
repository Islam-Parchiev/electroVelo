import React from 'react'

import styles from './GuaranteesText.module.scss'

interface GuaranteesTextProps {}

const GuaranteesText:React.FC<GuaranteesTextProps> = (props) => {
	const {} = props;
	return (
		<section className={styles.GuaranteesText}>
			<div className="container">
				<div className={styles.GuaranteesText__inner}>
					<p>
					Одной из важных составляющих работы нашего интернет-магазина 
					является то, что продаваемые товары сертифицированы 
					и обеспечены фирменной гарантией фирм-производителей.
					</p>
					<p>
					Также, для удобства покупателей, наш магазин помогает (участвует) 
					в формирование гарантийных запросов по всем нижеперечисленным брендам.
					 При любом гарантийном случае можно обращаться напрямую к нам.
					</p>
				</div>
			</div>
		</section>
	)
}

export default GuaranteesText
