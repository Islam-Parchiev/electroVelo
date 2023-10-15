import {FC} from 'react'

import styles from './MainAbout.module.scss';



const MainAbout:FC = () => {
	return (
		<section className={styles.MainAbout}>
	     <div className={`container ${styles.MainAbout__container}`}>
				<div className={styles.MainAbout__slider}>
					 <div className={styles.MainAbout__slides}>
						<div className={styles.MainAbout__slide}>
							<div className={styles.MainAbout__text}>
								<h1 className={styles.MainAbout__title}>Электро велосипеды</h1>
								<p className={styles.MainAbout__descr}>
							Cento10 Hybrid — это гоночный велосипед с помогающим педалированию электроприводом, 
							который устанавливает новый, очень высокий стандарт для данной категории
								</p>
							
        		  </div>
							<button className={`btn-reset btn ${styles.MainAbout__btn}`}>Подробнее</button>
						</div>
					 </div>
				</div>
			 </div>
		</section>
	)
}

export default MainAbout
