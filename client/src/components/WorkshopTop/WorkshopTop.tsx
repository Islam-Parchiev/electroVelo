import React from 'react'

import styles from './WorkshopTop.module.scss'

const WorkshopTop: React.FC = () => {
	return (
		<section className={styles.WorkshopTop}>
			<div className={styles.WorkshopTop__preview}>
				<div className="container">
					<div className={styles.WorkshopTop__preview_inner}>
						<ul className={`list-reset ${styles.Breadcrumbs}`}>
							<li className={styles.Breadcrumbs__item}>
								<a href="/">Главная</a>
							</li>
							<li className={styles.Breadcrumbs__item}>
								<a href="/">Веломастерская</a>
							</li>
						</ul>
						<h1 className={styles.WorkshopTop__title}>
							Веломастерская
						</h1>
					</div>
				</div>
			</div>

			<div className={styles.WorkshopTop__descr}>
				<div className="container">
					<div className={styles.WorkshopTop__descr_inner}>
						<p>
							Если вы купили велосипед в нашем магазине, то то можете
							не волноваться о настройке и проверке, так как мы
							это выполняем в рамках предпродажной подготовки.
							Но если вы откатались уже сезон и ваш железный конь
							уже выглядит и ведёт себя потрёпанно,
							мы с удовольствием приведём его в порядок. Наша
							веломастерская работает ежедневно и выполняет не только
							периодическое обслуживание, но и ремонт велосипеда
							любой сложности
						</p>
						<p>
							Отличное оснащение и опытные специалисты обеспечат
							максимально короткий срок ремонта. Какой бы ни была
							поломка, наличие большого количества узлов и деталей на
							складе позволит быстро вернуть технике
							работоспособность. Мы берём в работу горные модели,
							шоссейные и городские велосипеды Являясь
							профессиональными велосипедистами, мастера нашей
							компании быстро и чётко выявят неисправность
							и предложат максимально эффективный способ ремонта.
							Очень скоро ваш байк будет вновь на ходу
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default WorkshopTop
