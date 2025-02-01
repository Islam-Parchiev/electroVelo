import { FC } from 'react'

import styles from './MainCatalog.module.scss'
const MainCatalog: FC = () => {
	return (
		<section className={styles.MainCatalog}>
			<div className={`container ${styles.MainCatalog__container}`}>
				<h2 className="title">Каталог</h2>
				<div className={`${styles.MainCatalog__grid} ${styles.Grid}`}>
					<div className={styles.Grid__item}>
						<h3 className={styles.Grid__item_title}>Велосипеды</h3>
						<div className={styles.Grid__item_img}>
							<picture>
								<source srcSet="/images/CatalogGrid/1.webp"/>
  							<img src="/images/CatalogGrid/1.png" alt="Bike" />
							</picture>
						</div>
					</div>
					<div className={styles.Grid__item}>
						<h3 className={styles.Grid__item_title}>Trade-in</h3>
						<div className={styles.Grid__item_img}>
							<picture>
								<source srcSet="/images/CatalogGrid/2.webp"/>
  							<img src="/images/CatalogGrid/2.png" alt="Bike" />
							</picture>
						</div>
					</div>
					<div className={styles.Grid__item}>
						<h3 className={styles.Grid__item_title}>Запчасти</h3>
						<div className={styles.Grid__item_img}>
							<picture>
								<source srcSet="/images/CatalogGrid/3.webp"/>
  							<img src="/images/CatalogGrid/3.png" alt="" />
							</picture>
						</div>
					</div>
					<div className={styles.Grid__item}>
						<h3 className={styles.Grid__item_title}>Экипировка</h3>
						<div className={styles.Grid__item_img}>
							<picture>
								<source srcSet="/images/CatalogGrid/4.webp"/>
  							<img src="/images/CatalogGrid/4.png" alt="" />
							</picture>
						</div>
					</div>
					<div className={styles.Grid__item}>
						<h3 className={styles.Grid__item_title}>Аксессуары</h3>
						<div className={styles.Grid__item_img}>
							<picture>
								<source srcSet="/images/CatalogGrid/5.webp"/>
  							<img src="/images/CatalogGrid/5.png" alt="" />
							</picture>
						</div>
					</div>
					<div className={styles.Grid__item}>
						<h3 className={styles.Grid__item_title}>Велостанки</h3>
						<div className={styles.Grid__item_img}>
							<picture>
								<source srcSet="/images/CatalogGrid/6.webp"/>
  							<img src="/images/CatalogGrid/6.png" alt="" />
							</picture>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MainCatalog
