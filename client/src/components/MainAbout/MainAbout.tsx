import { FC } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, A11y } from 'swiper/modules'

import Button from '@components/Button/Button'
import InfoItem from '@components/InfoItem/InfoItem'

import 'swiper/css'
import 'swiper/css/pagination'
import styles from './MainAbout.module.scss'

const MainAbout: FC = () => {
	return (
		<section className={styles.MainAbout}>
			<div className={styles.MainAbout__top}>
				<Swiper
					className={styles.MainAbout__slider}
					slidesPerView={1}
					modules={[Pagination, A11y]}
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					onSwiper={(swiper: any) => console.log(swiper)}
					onSlideChange={() => console.log('slide change')}>
					<SwiperSlide>
						<div className={styles.Slide}>
							<div className={styles.Slide__content}>
								<div className={styles.MainAbout__text}>
									<h1 className={styles.MainAbout__title}>
										Электро велосипеды
									</h1>
									<p className={styles.MainAbout__descr}>
										Cento10 Hybrid — это гоночный велосипед
										с помогающим педалированию
										электроприводом, который устанавливает
										новый, очень высокий стандарт для данной
										категории
									</p>
								</div>
								<Button otherClass={styles.MainAbout__btn}>
									Подробнее
								</Button>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={styles.Slide}>
							<div className={styles.Slide__content}>
								<div className={styles.MainAbout__text}>
									<h1 className={styles.MainAbout__title}>
										Электро велосипеды
									</h1>
									<p className={styles.MainAbout__descr}>
										Cento10 Hybrid — это гоночный велосипед
										с помогающим педалированию
										электроприводом, который устанавливает
										новый, очень высокий стандарт для данной
										категории
									</p>
								</div>
								<Button otherClass={styles.MainAbout__btn}>
									Подробнее
								</Button>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={styles.Slide}>
							<div className={styles.Slide__content}>
								<div className={styles.MainAbout__text}>
									<h1 className={styles.MainAbout__title}>
										Электро велосипеды
									</h1>
									<p className={styles.MainAbout__descr}>
										Cento10 Hybrid — это гоночный велосипед
										с помогающим педалированию
										электроприводом, который устанавливает
										новый, очень высокий стандарт для данной
										категории
									</p>
								</div>
								<Button otherClass={styles.MainAbout__btn}>
									Подробнее
								</Button>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={styles.Slide}>
							<div className={styles.Slide__content}>
								<div className={styles.MainAbout__text}>
									<h1 className={styles.MainAbout__title}>
										Электро велосипеды
									</h1>
									<p className={styles.MainAbout__descr}>
										Cento10 Hybrid — это гоночный велосипед
										с помогающим педалированию
										электроприводом, который устанавливает
										новый, очень высокий стандарт для данной
										категории
									</p>
								</div>
								<Button otherClass={styles.MainAbout__btn}>
									Подробнее
								</Button>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
			<div className={styles.MainAbout__info}>
				<InfoItem title="Экстремальное вождение на горном велосипеде" />
				<InfoItem title="Велосипеды для профессионалов" />
				<InfoItem title="Долгая поездка на шоссейном велосипеде" />
			</div>
		</section>
	)
}

export default MainAbout
