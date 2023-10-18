import {FC} from 'react'

import styles from './MainCatalog.module.scss';
const MainCatalog:FC = () => {
	return (
		<section className={styles.MainCatalog}>
		  <div className={`container ${styles.MainCatalog__container}`}>
				<h2 className={styles.MainCatalog__title}>Каталог</h2>
				<div className={`${styles.MainCatalog__grid} ${styles.Grid}`}>
        	<div className={styles.Grid__item}>
          	 <h3 className={styles.Grid__item_title}>
							Велосипеды
						</h3>
						<div className={styles.Grid__item_img}>
							<img src="/images/CatalogGrid/1.png" alt="" />
						</div>
					</div>
					<div className={styles.Grid__item}>
          	 <h3 className={styles.Grid__item_title}>
							Велосипеды
						</h3>
						<div className={styles.Grid__item_img}>
							<img src="/images/CatalogGrid/1.png" alt="" />
						</div>
					</div>
					<div className={styles.Grid__item}>
          	 <h3 className={styles.Grid__item_title}>
							Велосипеды
						</h3>
						<div className={styles.Grid__item_img}>
							<img src="/images/CatalogGrid/1.png" alt="" />
						</div>
					</div>
					<div className={styles.Grid__item}>
          	 <h3 className={styles.Grid__item_title}>
							Велосипеды
						</h3>
						<div className={styles.Grid__item_img}>
							<img src="/images/CatalogGrid/1.png" alt="" />
						</div>
					</div>
					<div className={styles.Grid__item}>
          	 <h3 className={styles.Grid__item_title}>
							Велосипеды
						</h3>
						<div className={styles.Grid__item_img}>
							<img src="/images/CatalogGrid/1.png" alt="" />
						</div>
					</div>
					<div className={styles.Grid__item}>
          	 <h3 className={styles.Grid__item_title}>
							Велосипеды
						</h3>
						<div className={styles.Grid__item_img}>
							<img src="/images/CatalogGrid/1.png" alt="" />
						</div>
					</div>
					
				</div>
			</div>
		</section>
	)
}

export default MainCatalog