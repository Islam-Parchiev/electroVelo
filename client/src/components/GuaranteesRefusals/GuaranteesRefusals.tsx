import React from 'react'

import styles from './GuaranteesRefusals.module.scss'

interface GuaranteesRefusalsProps {}

const GuaranteesRefusals:React.FC<GuaranteesRefusalsProps> = (props) => {
	const {} = props;
	return (
		<section className={styles.GuaranteesRefusals}>
			<div className="container">
				<h2 className={styles.GuaranteesRefusals__title}>Гарантийное обслуживание <span>НЕ</span> производится, если:</h2>
				<div className={styles.GuaranteesRefusals__inner}>
					<div className={styles.GuaranteesRefusals__info}>
						<ul className={styles.GuaranteesRefusals__list}>
							<li className={styles.GuaranteesRefusals__item}>утерян или не заполнен гарантийный талон</li>
							<li className={styles.GuaranteesRefusals__item}>оборудование было поставлено на территорию РФ неофициально</li>
							<li className={styles.GuaranteesRefusals__item}>изделие имеет следы механического повреждения или вскрытия</li>
							<li className={styles.GuaranteesRefusals__item}>нарушены заводские пломбы</li>
							<li className={styles.GuaranteesRefusals__item}>были нарушены условия эксплуатации, транспортировки или хранения</li>
							<li className={styles.GuaranteesRefusals__item}>проводился ремонт лицами, не являющимися сотрудниками авторизованного сервисного центра</li>
							<li className={styles.GuaranteesRefusals__item}>использовались неоригинальные комплектующие</li>
						</ul>
					</div>
					<div className={styles.GuaranteesRefusals__image}>
						<img src="/images/Guarantees/refusalImg.png" alt="" />
					</div>
					<div className={styles.GuaranteesRefusals__text}>
						<p>
						Подробное описание условий предоставления гарантии вы можете найти в документации к приобретённому товару и/или на сайте соответствующего производителя.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default GuaranteesRefusals
