import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y } from 'swiper/modules'

import { useQuery } from '@tanstack/react-query'
import productService from '@services/product.service'

import Card from '@components/Card/Card'
import SliderControls from '@components/SliderControls/SliderControls'
import Skeleton from '@components/Skeleton/Skeleton'

import styles from './Kit.module.scss'

const Kit: React.FC = () => {
	const fakeArr = [...Array(10)]
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['kitProducts'],
		queryFn: () => productService.getKitItems(),
	})
	console.log(data)
	return (
		<section className={styles.Kit}>
			<div className={`container ${styles.Kit__container}`}>
				<h2 className="title">Экипировка</h2>
				<Swiper
					className={styles.Kit__slider}
					slidesPerView={1}
					modules={[A11y]}
					spaceBetween={0}
					scrollbar={{ draggable: true }}
					onSlideChange={() => console.log('slide change')}
					breakpoints={{
						577:{
							slidesPerView:3,
						},
					}}>
					{isLoading
						? fakeArr.map(item => (
							<SwiperSlide>
								<div className={styles.Kit__slide}>
									<Skeleton key={item} type="primary" />
								</div>
							</SwiperSlide>
						  ))
						: isSuccess
							? data?.data.data?.map(item => (
								<SwiperSlide>
									<div className={styles.Kit__slide}>
										<Card
											type="secondary"
											otherClass={styles.Kit__slide_card}
											price={item.price}
											title={item.title}
											available={item.available}
											previewImage={item.previewImage}
											country={item.country}
											prevPrice={item.prevPrice}
											id={item.id}
										/>
									</div>
								</SwiperSlide>
						  ))
							: 'Error'}
					<SliderControls type="prev" className={styles.Kit__prev}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="24"
							viewBox="0 0 14 24">
							<path
								d="M9.1248 21.1004L0.699805 12.7004C0.599805 12.6004 0.529138 12.4921 0.487805 12.3754C0.445805 
								12.2587 0.424805 12.1337 0.424805 12.0004C0.424805 11.8671 0.445805 11.7421 0.487805 11.6254C0.529138 
								11.5087 0.599805 11.4004 0.699805 11.3004L9.1248 2.87539C9.35814 2.64206 9.6498 2.52539 9.9998 
								2.52539C10.3498 2.52539 10.6498 2.65039 10.8998 2.90039C11.1498 3.15039 11.2748 3.44206 11.2748 
								3.77539C11.2748 4.10872 11.1498 4.40039 10.8998 4.65039L3.5498 12.0004L10.8998 19.3504C11.1331 
								19.5837 11.2498 19.8711 11.2498 20.2124C11.2498 20.5544 11.1248 20.8504 10.8748 21.1004C10.6248 
								21.3504 10.3331 21.4754 9.9998 21.4754C9.66647 21.4754 9.3748 21.3504 9.1248 21.1004Z"
							/>
						</svg>
					</SliderControls>
					<SliderControls type="next" className={styles.Kit__next}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="24"
							viewBox="0 0 14 24">
							<path
								d="M4.8752 21.1004L13.3002 12.7004C13.4002 12.6004 13.4709 12.4921 13.5122 12.3754C13.5542 
								12.2587 13.5752 12.1337 13.5752 12.0004C13.5752 11.8671 13.5542 11.7421 13.5122 11.6254C13.4709 
								11.5087 13.4002 11.4004 13.3002 11.3004L4.8752 2.87539C4.64186 2.64206 4.3502 2.52539 4.0002 
								2.52539C3.6502 2.52539 3.3502 2.65039 3.1002 2.90039C2.8502 3.15039 2.7252 3.44206 2.7252 
								3.77539C2.7252 4.10872 2.8502 4.40039 3.1002 4.65039L10.4502 12.0004L3.1002 19.3504C2.86686 
								19.5837 2.7502 19.8711 2.7502 20.2124C2.7502 20.5544 2.8752 20.8504 3.1252 21.1004C3.3752 
								21.3504 3.66686 21.4754 4.0002 21.4754C4.33353 21.4754 4.6252 21.3504 4.8752 21.1004Z"
							/>
						</svg>
					</SliderControls>
				</Swiper>
			</div>
		</section>
	)
}

export default Kit
