import React from 'react'

import styles from './GuaranteesConditions.module.scss'

const GuaranteesConditions: React.FC = () => {
	return (
		<section className={styles.GuaranteesConditions}>
			<div className="container">
				<h3 className={styles.GuaranteesConditions__title}>
					Для осуществления гарантийного обслуживания необходимы:
				</h3>
				<ul className={`list-reset ${styles.GuaranteesConditions__list}`}>
					<li className={styles.GuaranteesConditions__item}>
						правильно и без помарок и исправлений заполненный
						гарантийный талон, в котором должны быть указаны модель и
						серийный номер изделия, дата продажи и печать торгующей
						организации;
					</li>
					<li className={styles.GuaranteesConditions__item}>
						документ, подтверждающий покупку (товарная накладная);
					</li>
					<li className={styles.GuaranteesConditions__item}>
						полная комплектация товара
					</li>
				</ul>
				<div className={styles.GuaranteesConditions__text}>
					<p>
						Обращаем также ваше внимание на то, что при получении
						и оплате заказа покупатель в присутствии курьера обязан
						проверить комплектацию и внешний вид изделия на предмет
						отсутствия физических дефектов (царапин, трещин,
						сколов и т.п.) и полноту комплектации. После отъезда курьера
						претензии по этим вопросам не принимаются.
					</p>
				</div>
			</div>
		</section>
	)
}

export default GuaranteesConditions
