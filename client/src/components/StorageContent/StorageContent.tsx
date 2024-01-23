import React from 'react'

import styles from './StorageContent.module.scss'

const StorageContent: React.FC= () => {
	return (
		<section className={styles.StorageContent}>
			<div className="container">
				<div className={styles.StorageContent__inner}>
					<div className={styles.StorageContent__top}>
						<p className={styles.StorageContent__text}>
							Любишь кататься — люби и велосипед в квартире на зиму
							парковать или сдавай к нам на хранение и обслуживание.
							Типичное хранение велосипеда зимой у большенства людей
							не только занимает простарнство в коридорах на чердаках
							и балконах, но и изрядно портит велосипед и его
							агрегаты. Хранение велосипеда в квартире часто
							превращается в большую проблему. А мы вас ценим дорогие
							клиенты и предлагаем решить эту проблему.
						</p>
					</div>
					<div className={styles.StorageContent__bottom}>
						<div className={styles.StorageContent__price}>
							<h5>
								Хранение велосипеда на 6 месяцев с октября
								по апрель всего 5 000 ₽
							</h5>
							<span>
								Комплексное техническое обслуживание велосипеда
								в подарок (вместо 3500 РУБ.)
							</span>
						</div>
						<div className={styles.StorageContent__descr}>
							<p>
								Ваш велосипед будет храниться в теплом и сухом
								помещение на протяжение всего срока хранения.
								Перед упаковкой велосипед осматривается и
								смазывается для консервирования, а при выдачи его
								вам, проводится комплексное техническое
								обслуживание.
							</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="542"
								height="122"
								viewBox="0 0 542 122"
								fill="none">
								<path
									d="M589.522 92.7003C589.522 138.639 536.798 175.88 471.759 175.88C406.721 175.88 0 186.743 
										0 140.804C256.807 126.273 502.264 53.6159 563.274 0C628.312 0 589.522 46.7614 589.522 92.7003Z"
									fill="#101010"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default StorageContent
